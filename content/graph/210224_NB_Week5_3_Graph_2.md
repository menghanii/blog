---
title: 그래프를 추천 시스템에 어떻게 활용할까?
subtitle: 네이버 부스트캠프 week 5-3
tag: [부스트캠프, ML, AI, 그래프]
category: graph
image:
date: "2021-02-24"
order: 2
---

\- 이 강의정리본은 KAIST 신기정 교수님의 강의를 정리한 것임을 밝힙니다.\-

### 우리 주변의 추천시스템

- 아마존
  - 메인 페이지 : 고객 맞춤형 상품 목록을 보여줌. 고객이 구매할 가능성이 높은 상품들.
  - 특정 상품 페이지 : 함께 혹은 대신 구매할 상품 목록을 보여줌.
- 넷플릭스
  - 메인 페이지: 최신 영화 및 고객 맞춤형 영화 목록을 보여줌.
- 유튜브
  - 메인 페이지: 고객 맞춤형 영상 목록을 보여줌.
  - 현재 재생중 영상 페이지: 관련된 영상 목록을 보여줌.
- 페이스북
  - 추천하는 친구의 목록을 보여줌.
- 추천 시스템과 그래프
  - 추천시스템 : 사용자 각각이 구매할만한/선호할만한 상품을 추천함.
  - 사용자별 구매 기록 : 그래프로 표현이 가능하다. 이종 그래프(Bipartite Graph)
    - 구매 기록이라는 `암시적(Implicit)` 선호만 있는 경우도 있고
    - 평점 이라는 `명시적(Explicit)` 선호가 있는 경우도 있다.
  - 추천 시스템의 핵심 : 사용자의 `구매`를 예측하거나, `선호`를 추정하는 것.
    - 그래프 관점에서 추천시스템 = **미래의 간선을 예측하는 문제**(구매를 할지/안할지), **누락된 간선의 가중치를 추정하는 문제**(평점을 얼마나 줄지)

### 내용 기반 추천시스템(Content-Based)

- 각 사용자가 구매했던, 만족했던 상품과 유사한 것을 추천하는 방법이다.
- 예를 들어, 내가 `Whiplash`라는 영화를 재밌게 봤다면, 이와 비슷한 영화를 추천해주는 것이다. 비슷한 영화의 기준으로는,
  - 동일한 장르
  - 동일한 감독
  - 동일한 배우 등이 있을 수 있다.
- 이 추천시스템의 공통점은, 수많은 `부가정보`를 활용한다는 것이다!
- 내용 기반 추천은 총 `4`가지 단계로 이루어진다.
  - ① 사용자가 선호했던 상품들의 프로필(Item Profile)을 수집하는 단계
    - 상품프로필 : 해당 상품의 특성을 나열한 `벡터`. (One-Hot Encoding)
    - ![image-20210224171118115](/assets/img/post-images/image-20210224171118115.png){: width="80%"}
  - ② 사용자 프로필(User Profile)을 구성하는 단계
    - 즉, 사용자가 본 영화, 구매한 상품들의 프로필들을 토대로 사용자의 프로필을 만드는 것.
    - 이 때, 사용자가 각 영화/상품들에 대해 선호하는 정도가 다를 수 있기 때문에, `가중평균`을 통해 사용자 프로필을 구성한다.
    - 즉, 사용자가 선호하는 상품들의 특징이 **집약**된 벡터라고 생각할 수 있다.
  - ③ 사용자 프로필과 다른 상품들의 상품 프로필을 매칭하는 단계
    - 유저가 구매할만한 상품 후보들의 상품 프로필을 만들고, ②에서 만들어진 사용자 프로필과 얼마나 유사한지를 살펴보는 단계.
    - 구체적으로, 사용자 프로필 벡터와 상품 프로필 벡터를 이용하여 코사인 유사도를 계산한다.
    - 코사인 유사도 : $$\frac{u*v}{||u||*||v||}$$
    - ![image-20210224172612836](/assets/img/post-images/image-20210224172612836.png){: width="80%"}
    - ④ 사용자에게 상품을 추천하는 단계
      - 계산한 코사인 유사도가 높은 상품들을 추천한다.
- 장점
  - 다른 사용자의 구매기록이 필요하지 않다.
  - 독특한 취향의 사용자에게도 추천이 가능하다.
  - 새 상품에 대해서도 추천이 가능하다.
  - 추천의 이유를 제공할 수 있다. ('당신이 로맨스 영화를 선호했기 때문에...')
- 단점
  - 상품에 대한 부가 정보가 없는 경우에는 사용할 수 없다. (상품 프로필을 구성할 수 없기 때문)
  - 구매기록이 없는 사용자에게는 사용할 수 없다.(Cold-Start Problem)
  - 과적합으로 인해 지나치게 협소한 추천을 할 위험이 있다.
    - 우연히 어떤 사람이 로맨스 영화만 3번 연달아서 봤다고 해서, 그 사람이 로맨스 영화광이라고 일반화할 수는 없다. 하지만 유저 프로필은 로맨스에 큰 가중치를 갖게끔 구성된다.

### 협업 필터링(Collaborative Filtering)

- 내용 기반 추천시스템의 단점을 일부 보완하는 협업 필터링. `사용자-사용자` 협업필터링에 대해 알아보자.

- 협업 필터링의 원리 : 다음의 세 단계로 이루어진다.

  - ① 나와 유사한 취향을 갖는 사용자를 찾는다.
  - ② 이 사용자들이 선호한 상품을 찾는다.
  - ③ 이 상품들을 나에게 추천해준다.

- 핵심은 **유사한 취향의 사용자**를 찾는 것! 취향의 유사도는 어떻게 계산할까?

  - ![image-20210224173330403](/assets/img/post-images/image-20210224173330403.png){: width="80%"}

  - 각 사용자가 `row`에, 각 영화가 `column`에 있다.

  - 각 사용자는 평점을 5점 만점의 평점을 주었고, `?`는 해당 영화를 평가하지 않은 것을 의미한다.

  - 이 데이터를 통해 지수와 제니는 유사한 취향을 가지며, 제니와 로제의 취향은 다른 것을 알 수 있다.

  - 취향의 유사성은 `상관계수(Correlation Coefficient)`를 통해 측정한다.

    - 사용자 `x`, `y`, 상품 `s`, 평점 $$r_xs$$, $$r_ys$$, 평점의 평균 $$\bar{r_x}, \bar{r_y}$$, `x`, `y`가 공동으로 구매한 상품들 $$S_{xy}$$로 정의했을 때,

    - $$
      sim_{xy} = \frac{\sum_{s\in{S_{xy}}}(r_{xs}-\bar{r_x})(r_{ys}-\bar{r_y})}{\sqrt{\sum_{s\in{S_{xy}}}(r_{xs}-\bar{r_{x}})^2}+\sqrt{\sum_{s\in{S_{xy}}}(r_{ys}-\bar{r_{y}})^2}}
      $$

    - 즉, 통계에서의 상관계수를 통해 취향의 유사도를 계산한다.

    - `분자`를 보자. `x`가 `s`에 대해 자신의 평균평점보다 높은 평점을 매겼고, `y`도 자신의 평균평점보다 높은 평점을 매겼으면 분자의 값은 `양수`가 되어 양의 상관관계를 갖는다. 반면, `x`는 평균평점보다 높은 점수를 줬는데, `y`가 평균평점보다 낮은 점수를 줬다면 `음수`가 된다.

    - `분모`는 최종적인 분자값을 0~1 사이로 정규화하는 역할을 담당한다.

    - 즉, 취향의 일치가 발생할수록 양수, 취향의 불일치가 발생할수록 음수가 된다.

  - ![image-20210224174322503](/assets/img/post-images/image-20210224174322503.png){: width="80%"}

  - ![image-20210224175640931](/assets/img/post-images/image-20210224175640931.png){: width="80%"}

  - 따라서, 지수의 취향을 추정할 떄에는 제니의 취향을 고려하게 된다.

- 구체적으로, 취향의 유사도를 가중치로 사용한 평점의 `가중평균`을 통해 평점을 추정한다.

  - `x`의 `s`에 대한 평점 $$r_{xs}$$를 추정해보자.
  - 상품 `s`를 구매한 사용자 중에 `x`와 가장 유사한 `k`명의 사용자 `N(x;s)`를 뽑는다.
  - 따라서, 평점 $$r_{xs}$$는 다음과 같이 추정된다.

  $$
  \hat{r_{xs}} = \frac{\sum_{y\in{N(x;s)}}sim(x,y)*r_{ys}}{\sum_{y\in{N(x;s)}}sim(x,y)}
  $$

- 이렇게 계산된 상품들의 평점을 통해, 추정한 평점이 가장 높은 상품을 추천한다.
- 협업필터링의 장점

  - 상품에 대한 부가정보가 없는 경우에도 사용할 수 있다.

- 협업필터링의 단점
  - 충분한 수의 평점 데이터가 누적되어야 효과적이다.
  - 새 상품, 새로운 사용자에 대한 추천이 불가능하다.
  - 독특한 취향의 사용자에게는 추천이 어렵다. (비슷한 취향을 갖는 사용자가 없기 때문)

### 추천시스템의 평가

- 데이터 분리
  - ![image-20210224180725771](/assets/img/post-images/image-20210224180725771.png){: width="80%"}
  - 평점 정보가 없는 cell은 비어있게 된다.
  - ![image-20210224180755036](/assets/img/post-images/image-20210224180755036.png){: width="80%"}
  - 평가 데이터 부분은 주어지지 않았다고 가정하여 추천시스템으로 하여금 계산하게끔 한다.
  - ![image-20210224180832509](/assets/img/post-images/image-20210224180832509.png){: width="80%"}
  - 추정한 평점과 실제 평가 데이터를 비교하여 오차를 측정한다.
- 평가 지표
  - `MSE` : 평균 제곱 오차
  - `RMSE` : 평균 제곱근 오차

### 실습 : 협업 필터링 구현

- 데이터 불러오기 및 전처리
- 취향의 유사도 계산
- 점수 추정
- 정확도 평가

### 정리

1. 우리 주변의 추천시스템
   1. 아마존, 넷플릭스, 페이스북, 유튜브 등
2. 내용 기반 추천 시스템
   1. 장점 : 새로운 상품에 대한 추천이 가능
   2. 단점 : 상품에 대한 부가 정보가 있는 경우에만 사용 가능
3. 협업 필터링
   1. 장점 : 부가 정보가 없는 경우에도 사용 가능
   2. 단점 : 새로운 상품에 대한 추천이 불가능
4. 추천 시스템의 평가
   1. 학습/평가 데이터 분리, 평균 제곱(근) 오차
5. 실습 : 협업 필터링 구현
