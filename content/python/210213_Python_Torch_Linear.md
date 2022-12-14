---
title: "[Python] PyTorch의 nn.Linear 정리"
subtitle: nn.Linear 이해하기
tag: [파이썬, pytorch]
category: python
image:
date: "2021-02-13"
order: 2
---

### parameters : 모델을 정의할 때

- `in_features` : 입력으로 들어가는 data point의 `column`수(=`feature` 개수)
  - ex) 키, 나이, 몸무게 의 feature가 들어간다면 in_features = 3
- `out_features` : 출력으로 나오는 `feature`의 개수.
  - ex) MNIST 라면, 0~9까지 총 10개의 클래스에 대한 값이 나와야하므로, `10`
  - ex2) 일반적인 regression 문제라면 1개의 값이 나와야하므로, `1`
- `bias` : default값은 `True`이며, intercept를 넣을 것인지에 대한 boolean 값.

### Input : 실제로 모델에 data가 들어갈 때

- `(N, *, H_in)` : `N`은 배치사이즈, `*`는 additional dimension (어떤 수가 들어가도 무방함.), `H_in`은 `in_features`.

### Output : 모델에서 나오는 출력값

- `(N, *, H_out)` : 배치사이즈, additional dimension, `out_features`
