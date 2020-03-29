# Maybe Monad

`Maybe` 는 Functional Programming에서 사용되는 Maybe Monad를 구현한 것이다.

- 모나드가 뭔가요? [클릭](https://youtu.be/jI4aMyqvpfQ)
- [토스 프론트엔드 챕터 리드가 말하는 모나드](https://sojin.io/article/maybe-%EB%AA%A8%EB%82%98%EB%93%9C/)

# 장점

- `null` 혹은 `undefined` 체크를 따로 하지 않도록 만들어준다. (`Maybe` 타입을 주고, `map` 혹은 `flatMap`을 이용하여 데이터에 접근했을 경우)
