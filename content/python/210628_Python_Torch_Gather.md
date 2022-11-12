---
title: "[Python] PyTorch의 Gather"
subtitle: torch의 gather 이해하기
tag: [파이썬, pytorch]
category: python
image:
date: "2021-06-28"
---

## torch.gather

---

> `torch.gather`(_input_, _dim_, _index_, *\*\*, *sparse_grad=False*, *out=None\*) → Tensor

```python
>>> t = torch.tensor([[1, 2], [3, 4]])
>>> torch.gather(t, 1, torch.tensor([[0, 0], [1, 0]]))
tensor([[ 1,  1],
        [ 4,  3]])
```

`input` : `index`에 따라 뽑아낼 tensor들이 있는 원본

`dim` : `input`의 어느 `dimension`에서 뽑을지

`index` : 해당 `dimension`에서 뽑을 인덱스

위의 사례에서 보면, `t` 는 (1, 2, 2)짜리 텐서이다. 여기서 torch.gather의 `dim`을 1로 주면,
