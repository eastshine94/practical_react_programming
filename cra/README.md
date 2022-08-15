## create-react-app으로 시작하기

### 1. 개요

- 리액스 개발 환경을 직접 구축하려면 많은 지식과 노력이 필요

  - webpack, babel, jest, eslint, polyfill, HMR, CSS 후처리 ...

- CRA는 페이스북에서 관리하는 공식 툴

### 2. 이미지

- image import하고 build 시, 큰 사이즈의 이미지는 build > media에 저장되고, 작은 사이즈 이미지는 js에 내장됨. 내장되는 이유는 다음과 같음

  - http 요청 횟수를 줄임
  - 빠르게 이미지를 보여줄 수 있음

### 3. test

- .test.js, .spec.js로 끝나면 테스트 파일
- **test** 폴더 안에 있으면, js파일 모두가 테스트 파일이 됨.

### 4. polyfill

- 특정 기능을 제공하지 않는 낮은 버전의 브라우저에서 해당 기능을 사용할 수 있도록 해줌
- core-js에서 찾아서 import하면 됨
- 원래는 core-js를 설치해야 되지만 cra에는 core-js가 내장되어 있음

### 5. 환경변수

- 개발, 테스트 또는 배포 환경별로 다른 값을 적용할 때 유용
- 전달된 환경변수는 코드에서 `process.env.{변수이름}`으로 사용 가능
- cra는 `NODE_ENV` 라는 환경 변수를 가지고 있음 ex) `process.env.NODE_ENV`
  - `npm start`로 실행하면 **development**
  - `npm test`로 실행하면 **test**
  - `npm run build`로 실행하면 **production**
- 환경 변수를 커맨드 라인에서 입력 시

  - `REACT_APP_*` 로 시작해야 함

- root path에 .env 파일을 생성하여 환경 변수 정의 가능
  - development는 .env.development
  - production은 .env.production
- build 폴더 실행
  - npx serve -s build
