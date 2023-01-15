# typescript로 변환하는방법

## 1. typescript 인스톨

### `npm install typescript @types/node @types/react @types/react-dom @types/jest @types/react-router-dom`

## 2. src 수정

- .js ->*.ts 변경되어야 한다.
- .jsx ->*.tsx 변경되어야 한다.

## 3. json-server를 먼저 기동한다

### `json-server --watch ./src/db/data.json -p 3001`

## 4. npm start를 한다

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# ※ 아직 해결하지 못한 내용

- tsx 로 변환했지만 compile과정에서 file 확장자 문제가 있는 듯...
- 단어 삭제시 table이 refresh 안되고 글자들만 삭제되는 현상해결 해야 함.
