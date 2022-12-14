---
title: "[Python] PyTorch의 nn.LSTM 정리"
subtitle: 파이토치에서 사용하는 nn.LSTM을 정리해보았습니당.
tag: [파이썬, pytorch]
category: python
image:
date: "2021-02-12"
order: 1
---

### parameters

- `input_size` : input의 feature 개수
- `hidden_size` : hyperparameter. Hidden node의 개수
- `num_layers` : LSTM을 몇 단 쌓을지. 2 이상이면 `stacked LSTM`이 된다.
- `bias` : intercept를 넣을지. default 값은 `True`
- `batch_first` : True로 하는 경우, input과 output Tensor가 **(batch, seq, feature)**로 나오게 됨. default값은 `False`
- `dropout` : dropout 비율값
- `bidirectional`: default 값은 `False`

### Inputs

- LSTM의 input은 `input, (h_0, c_0)`의 형태로 들어간다.
- input의 shape는 `batch_first`가 `False`인 경우에는 (sequence_length, batch, feature) 로 들어가야 하며, `batch_first`가 `True`인 경우에는 (batch, sequence_length, feature)로 들어간다.

```python
# example - MNIST Classifier
for epoch in range(EPOCHS):
    for batch_in, batch_out in train_iter:
        output, (hn, cn) = R.forward(batch_in.view(-1, 28, 28).to(device))
```

- `h_0` : `hidden state`를 초기화해서 input으로 들어가야 한다.
  - **(num_layers \* num_directions, batch, hidden_size)**의 shape으로 들어가야한다.
  - `num_directions`는 `bidirectional`이 `True`일 때 `2`, `False`일 때 `1`이다.
  - 보통 `torch.zeros`를 활용하여 초기화해준다.
- `c_0` : `cell state`를 초기화해서 input으로 들어가야 한다.
  - `h_0`와 마찬가지로 (num_layers \* num_directions, batch, hidden_size)의 shape으로 들어간다.
- 만약 `h_0`와 `c_0`가 제공되지 않는 경우, 알아서 `zero` 값으로 들어간다.

### outputs

- LSTM의 output은 `output, (h_n, c_n)`의 형태로 출력된다.
- `output`: `batch_first`가 `True`인 경우 **(batch, sequence_length, num_directions \* hidden_size)**로 나온다.
  - LSTM의 `h_t`, 즉 `0`부터 `t`번째 hidden state의 값을 포함하는 텐서이다.
- `h_n`
- `c_n`

```python
# example
class LongShorTermMemory(nn.Module):
    def __init__(self, name='lstm', xdim=28, hdim=256, ydim=10, n_layer=3):
        super(LongShortTermMemory, self).__init__()
        self.name = name
        self.xdim = xdim # input의 column(feature) 개수 -> MNIST width = 28
        self.hdim = hdim # hidden nodes 수 -> hyperparameter
        self.ydim = ydim # 최종 출력층의 node 수 -> MNIST이므로 0~9 총 10개
        self.n_layer = n_layer # Stacked LSTM

        self.lstm = nn.LSTM(input_size=self.xdim,
                           hidden_size=self.hdim,
                           num_layers=self.n_layer,
                           batch_first=True) # LSTM 단
        self.lin = nn.Linear(in_features=self.hdim,
                            out_features=self.ydim,
                            bias=True) # 최종 출력층

    def forward(self, x):
        # h_0, c_0 초기화 해주어야 함.(hidden_state, cell_state) - 없어도 okay
        h_0 = torch.zeros(self.n_layer, x.size(0), self.hdim).to(device)
        c_0 = torch.zeros(self.n_layer, x.size(0), self.hdim).to(device)
        rnn_out, (hn, cn) = self.rnn(x, (h_0, c_0))
        out = self.lin(rnn_out[:, -1:]).view([-1, self.ydim])
        # rnn_out[:, -1:] : rnn_out은 [batch, seq_len, hidden_size]로 나옴.
        # rnn_out[:, -1:]은 [batch, 마지막 sequence, hidden_size].
        # 즉, batch의 각 data point별 마지막 sequence의 hidden_state를
        # linear regression에 넣겠다는 말!
        # view([-1, self.ydim]) : rnn_out[:, -1:]이 linear regression을 거치면
        # [batch, 1, ydim]으로 나옴. 이를 [batch, ydim]으로 바꾸어줘야함.
        # 따라서 view[-1, self.ydim]을 한 것!
        return out

R = LongShortTermMemory(name='lstm', xdim=28, hdim=256, ydim=10, n_layer=2).to(device)
loss = nn.CrossEntropyLoss()
optm = optim.Adam(R.parameters(), lr=1e-3)
```
