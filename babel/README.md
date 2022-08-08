## 바벨 사용해보기

babel은 다음과 같은 용도로 사용됩니다.

- es6를 es5로 변환하기 위해 사용
- 코드에서 주석 제거 및 압축을 위해 사용
- react에서는 jsx를 createElement로 변환하기 위해 사용

npm에서 다음을 설치합니다.

- @babel/core: babel의 핵심 기능
- @babel/cli: cli에서 사용할 바이너리가 들어 있음
- @babel/preset-react: react를 위한 플러그인 여러 개를 모아놓음

plugin: 하나의 변환하는 기능을 의미

preset: 여러 개의 plugin을 모아놓은 것

특정 목적을 위해 plugin들을 하나의 preset으로 묶음

**cli:** npx babel --watch src --out-dir . --presets @babel/preset-react
