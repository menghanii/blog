---
title: "[Python] Programmers - 메뉴 리뉴얼"
subtitle: Programmers 메뉴 리뉴얼 문제풀이
tag: [프로그래머스, 알고리즘, 구현]
category: algorithm
image:
date: "2021-07-14"
order: 1
---

### 문제링크

https://programmers.co.kr/learn/courses/30/lessons/72411

### 문제설명

```
레스토랑을 운영하던 스카피는 코로나19로 인한 불경기를 극복하고자 메뉴를 새로 구성하려고 고민하고 있습니다.
기존에는 단품으로만 제공하던 메뉴를 조합해서 코스요리 형태로 재구성해서 새로운 메뉴를 제공하기로 결정했습니다. 어떤 단품메뉴들을 조합해서 코스요리 메뉴로 구성하면 좋을 지 고민하던 "스카피"는 이전에 각 손님들이 주문할 때 가장 많이 함께 주문한 단품메뉴들을 코스요리 메뉴로 구성하기로 했습니다.
단, 코스요리 메뉴는 최소 2가지 이상의 단품메뉴로 구성하려고 합니다. 또한, 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함하기로 했습니다.

예를 들어, 손님 6명이 주문한 단품메뉴들의 조합이 다음과 같다면,
(각 손님은 단품메뉴를 2개 이상 주문해야 하며, 각 단품메뉴는 A ~ Z의 알파벳 대문자로 표기합니다.)

손님 번호	주문한 단품메뉴 조합
1번 손님	A, B, C, F, G
2번 손님	A, C
3번 손님	C, D, E
4번 손님	A, C, D, E
5번 손님	B, C, F, G
6번 손님	A, C, D, E, H

가장 많이 함께 주문된 단품메뉴 조합에 따라 "스카피"가 만들게 될 코스요리 메뉴 구성 후보는 다음과 같습니다.

코스 종류	    메뉴 구성	         설명
요리 2개 코스	A, C	     1번, 2번, 4번, 6번 손님으로부터 총 4번 주문됐습니다.
요리 3개 코스	C, D, E	     3번, 4번, 6번 손님으로부터 총 3번 주문됐습니다.
요리 4개 코스	B, C, F, G	 1번, 5번 손님으로부터 총 2번 주문됐습니다.
요리 4개 코스	A, C, D, E	 4번, 6번 손님으로부터 총 2번 주문됐습니다.
```

### 문제풀이

<p>
설마 될까..? 하면서 무식하게 `itertools`의 `combinations`를 이용하여 코스별 모든 조합을 구하여 `dictionary`에 넣어주고, 해당 `dictionary`에서 가장 많이 기록된 메뉴 조합을 `answer`에 추가하는 방식으로 풀었다.
</p>
<p>
문제를 풀면서 주의해야했던 점은, ① `combinations`를 함에 있어 모든 사람의 코스별로 알파벳 순서가 맞아야된다는 점, ② 사람들이 먹은 메뉴 개수보다 course 개수가 많은 경우의 처리 (ex. 모든 사람이 메뉴 3개 먹었는데, course에서 4개짜리 조합을 구하라고 할 때), ③ `2명` 이상이 먹은 메뉴 조합만을 등록할 수 있다는 점이다.
</p>
<p>
풀면서, 당연히 `3중 for문`이기 때문에 효율성 체크에서 걸리겠다 싶었다. 그런데 이 문제의 경우, 효율성 테스트는 따로 없고 정확성 테스트만 있었다. 그리고 정확성 테스트에서도 의외로 오랜 시간이 걸리지 않았는데, 그 이유는 나중에 차차 살펴봐야겠다.
</p>
풀이는 아래와 같다.

```python
from itertools import combinations
from collections import defaultdict

def solution(orders, course):
    answer = []
    for c in course:
        menu = defaultdict(int)
        for o in orders:
            for combi in combinations(sorted(list(o)),c): # ①번 주의사항
                menu[combi_str] += 1
        if len(menu) == 0: # ②번 주의사항
            max_vote = 0
        else:
            max_vote = max(menu.values())
        if max_vote >= 2: # ③번 주의사항
            for k, v in menu.items():
                if v == max_vote:
                    answer.append(k)
    return sorted(answer)
```

![image-20210714032641510](/assets/img/post-images/image-20210714032641510.png){: width="100%"}
