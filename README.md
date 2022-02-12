# TDD By Example - 화폐 예제

[화폐 예제 실습으로 TDD의 리듬 느껴보기](https://datalater.github.io/tags/tdd-by-example/)에 대한 실습 코드 저장소입니다.

## 실습 코드 보는 법

### 프로젝트 준비

```bash
git clone https://github.com/datalater/tdd-example-currency.git
cd tdd-example-currency
npm install
```

### 테스트 코드 실행

```bash
npm test 
# or
npm test:watch
````

### 실습 코드 브랜치 확인

```bash
git branch
```

### 원하는 실습 코드로 바꾸기

```bash
git checkout <브랜치이름>
```

## 폴더 구조

> 실습 브랜치에 대한 폴더 구조입니다.

```console
❯ tree -I node_modules
.
├── README.md
├── app.test.ts        # 테스트 파일
├── app.todo.md        # 할일 목록
├── jest.config.js
├── package-lock.json
└── package.json
```

