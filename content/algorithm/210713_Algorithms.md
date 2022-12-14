---
title: "[Python] Programmers - 더 맵게 "
subtitle: Programmers 더 맵게 문제 풀이 (Heap - heapq, heapify, heappop, heappush)
tag: [프로그래머스, 알고리즘, heap]
category: algorithm
image:
date: "2021-07-13"
order: 1
---

https://programmers.co.kr/learn/courses/30/lessons/42626?language=python3

### 문제설명

```
매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.

섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)

Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.
```

### 최초 풀이

처음에는 `힙(heap)`을 사용하지 않고 풀었다. 리스트 원소 수가 `1`이 될 때까지, 계속 `sort`를 반복하며 가장 작은 원소가 `K`보다 큰지 검사한 후, `K`보다 작다면 리스트에서 가장 작은 원소를 하나 더 뽑아 `new_spice`를 만들고, 이를 리스트에 `append`하는 방식으로 진행했다.

```python
def solution(scoville, K):
    answer = 0
    while len(scoville) != 0:
        scoville.sort(reverse=True)
        first_spicy = scoville.pop()
        if first_spicy >= K:
            break
        else:
            if len(scoville) == 0: # 하나를 뽑았는데, scoville에 더 남은 원소가 없다면
                answer = -1
                break
            second_spicy = scoville.pop()
            new_spice = first_spicy + (2*second_spicy)
            answer += 1
            scoville.append(new_spice)
    return answer
```

이렇게 실행하면 정확성 테스트는 모두 통과한다. 그러나 효율성 테스트에서 시간 초과로 모두 실패한다. 아마 매 iteration마다 `sort` 알고리즘을 반복하는 것이 문제의 원인일 것이다. 최악의 경우 모든 리스트의 원소들을 돌면서 `sort`알고리즘을 반복하므로 시간복잡도는 `O(N * NlogN)`이 될 것이다.

![image-20210713154241116](/assets/img/post-images/image-20210713154241116.png){: width="100%"}

![image-20210713154505977](/assets/img/post-images/image-20210713154505977.png){: width="100%"}

### 두 번째 풀이 : `heap`

두 번째는 파이썬 내장 모듈인 `heapq`를 사용하여 풀었다.**`heap`은 최댓값 및 최솟값을 찾아내는 연산을 빠르게 하기 위해 고안된, 완전이진트리를 기본으로 하는 자료구조이다.** 부모노드의 키 값이 자식노드의 키 값보다 항상 큰 힙을 `최대 힙(max heap)`, 항상 작은 힙을 `최소 힙(min heap)`이라 한다. Python에서 제공하는 `heapq`에서는 기본적으로 `최소 힙`을 제공한다. `heappush` 를 사용하여 값을 추가하고, `heappop`을 통해 가장 작은 값부터 빼내어 반환한다. 이전 풀이에서 시간 초과의 원인이었던 매 iteration마다의 sort 반복을 해결해줄 수 있다.

먼저 `heapq`를 import하고, 일반적인 리스트를 힙 자료구조로 만들어주기 위해 `heapify`를 사용한다. `heapify`는 `O(N)`의 시간복잡도를 갖는다.

`heapq` 의 메소드 사용법은 `heapq.method()`로 이루어져 있으며, 객체를 인자에 넣는 방식으로 이루어진다.

```python
import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
```

이제 이전의 코드에서 `heap` 자료구조로 변환할 수 있는 코드들을 바꿔주자.

```python
import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville) # 요기
    while len(scoville) != 0:
        first_spicy = heapq.heappop(scoville) # 요기
        if first_spicy >= K:
            break
        else:
            if len(scoville) == 0:
                answer = -1
                break
            second_spicy = heapq.heappop(scoville) # 요기
            new_spice = first_spicy + (2*second_spicy)
            answer += 1
            heapq.heappush(scoville, new_spice) # 요기
    return answer
```

`heappush`를 하는 경우 heap 자료구조에서는 이진트리 내 원소 간 대소 비교를 통해 push를 수행한다. `heappush`는 `O(logN)`의 시간복잡도를 갖는다. `heappop`역시 `O(logN)`의 시간복잡도를 갖는다. 따라서 위 알고리즘의 경우 `heap`내의 모든 원소를 돈다는 것을 가정할 때, `O(N * logN)`의 시간복잡도를 갖는다.

따라서, 결과는? 성공했다.

![image-20210713162229023](/assets/img/post-images/image-20210713162229023.png){: width="100%"}
