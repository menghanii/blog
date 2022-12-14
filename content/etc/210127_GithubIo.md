---
title: Github.io 관련 이슈 모음 및 디버깅 기록
subtitle: Github IO 블로그 만들기 로그
tag: [깃헙, github, githubio]
category: etc
image:
date: "2021-01-27"
order: 1
---

### 2020-01-27

① 일전부터 계속 그래왔던 문제지만, `jekyll serve`로 내 깃헙블로그가 온라인에 `push`되기 이전에 업데이트가 잘되었는지를 보기 위해 ruby를 깔고, 알지도 못하는 gems를 깔아가며 어찌저찌 `jekyll serve`를 완성시켜서 볼 수 있게 되었다.

근데, 이렇게 하고나서부터 매번 `git push`를 할 때마다 메일이 날아온다. 무슨 메일인가 하면,

<p align="center"><img src="https://user-images.githubusercontent.com/37925813/105991058-ad3af980-60e6-11eb-8b9e-e8d38d0d21f9.png"></p>

이다.

`Continuous Integration`의 문제라는데, 난 이게 아직 뭔지 잘 모르겠다. 저 초록색 배너를 통해서 workflow에 들어가서 확인해보니

<p align="center"><img src="https://user-images.githubusercontent.com/37925813/105991504-33574000-60e7-11eb-9928-f2ecd35ae8ef.png"></p>

로 나온다. 디버깅 해보겠답시고 에러 메시지를 확인해보니, `vendor/bundle`에서 `bundle config`를 수행하는 과정에서 `Could not find 'bundler' (2.2.5)` 에러가 발생하는 것이다. `vendor`를 확인해보니 아예 `bundle`이 없더라..

그래서 Jekyll 홈페이지에 있는 공식문서를 참고해보았다. 보니, https://jekyllrb-ko.github.io/tutorials/using-jekyll-with-bundler/에서 'Jekyll에 Bundler 사용하기' 편에 보면 Bundler 환경설정에 있어서 /vendor/bundle에 `set path`를 해줘야한다더라. 하라는대로 했더니, 오! `bundle` 폴더가 생겼다.

그리고 나서 다시 `git push`를 해보았지만, 여전히 문제는 동일하게 발생했다. 에러메시지 중에 `bundle update --bundler`를 해보래서, 해보았는데 이번에는 `ruby cmd`상에서 문제가 생겼다. 무엇이냐......

<p align="center"><img src="https://user-images.githubusercontent.com/37925813/105992028-eb84e880-60e7-11eb-8584-930d46d8081c.png"></p>

요 놈의 `http_parser.rb`를 인스톨하는데 자꾸 문제가 생긴다 ㅡ ㅡ ;;

```
generating ruby_http_parser-x64-mingw32.def
compiling ruby_http_parser.c
x86_64-w64-mingw32-gcc.exe: error:
GitHub_io_2/vendor/bundle/ruby/2.7.0/gems/http_parser.rb-0.6.0/ext/ruby_http_parser:
No such file or directory
make: *** [Makefile:244: ruby_http_parser.o] 오류 1

make failed, exit code 2
```

랜다. 관련해서 구글링을 해보니, 보통은 폴더명이 `http parser`로 되어있어서 생기는 문제라고 한다. http와 parser 사이에 whitespace가 존재해서 발생하는 문제라는데, 뭔지는 모르겠고 어쨌든 내 폴더는 그 문제는 아닌 것 같다.. 그래서 일단은 여기서 멈췄다. 헝헝

(그래도 다행인건 continuous intergration 문제가 생겨도 딱히 포스트들이 업로드 되는데는 문제가 없다는 것이다.)

② 또 하나의 문제는, 가끔 `markdown`이 반영이 안되어서 나타나는 포스트들이 생긴다는 점이다. `h3`, `h4` 등의 header들이 정확하게 나타나지 않고, '#### 제목' 이런식으로 뜨는 경우가 있다. 심지어 첫 몇 줄까지는 markdown이 잘 먹다가, 어느 줄 이후부터 아예 markdown 적용이 안되는 일이 생기고 있다. 아래의 그림을 보시라.

<p align="center"><img src="https://user-images.githubusercontent.com/37925813/105992671-c0e75f80-60e8-11eb-9837-ff7819336aa6.png"></p>

`Filter와 Stride`까지는 잘 적용되다가, 갑자기 이하의 모든 `markdown`이 먹지 않는 현상이 발생한 것이다. 대체 왜 나에게 이런 시련을 주는 것인가. 아직까지 무엇이 문제인지는 잘 모르겠다.

+) `<p align="center"><img src="소스"></p>` 를 써서 이미지를 가운데 정렬하고 있는데, 처음에는 가운데 정렬이 잘 되다가 언젠가부터 가운데 정렬이 잘 안되기 시작했다. 미칠 노릇이다. 껄껄껄.

\+) 문제의 원인을 발견한 것 같다. 위 그림에서 'Filter와 Stride' 아래 부분부터 문제가 발생하는데, 그 시작이 '\<그림\>'이다. 여기서, `<`을 `\<`로 바꿔주지 않으면 markdown은 이를 글자로 인식하지 않는 것 같고, `html`의 bracket으로 인식하는 것 같다. 따라서 `<그림>`을 다 지워주고 다시 업데이트 해보았다. → 결과는 성공이다.

<p align='center'><img src="https://user-images.githubusercontent.com/37925813/107258861-a36aac00-6a7f-11eb-94fe-545a04af0ae9.png"></p>

---
