<div align="center">
<h1>1:1 채팅서비스</h1>

</div>

- Heroku: https://room-messages.herokuapp.com/

- Storybook: https://bobeenlee-room-messages.surge.sh/?path=/story/chatroommessageappbar--primary

## ✨ Features

- ⚡️ Next.js 12
- ⚛️ React 18
- ✨ TypeScript
- 📚 Storybook - Build component driven UIs faster
- 🏗 Nx.dev - Smart, Fast and Extensible Build System
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using @room-messages/ prefix (rename prefix)
- 👀 Default Open Graph — Awesome open graph generated using og
- 📏 ESLint — Find and fix problems in your code, also will auto sort your imports
- 💖 Prettier — Format your code consistently
- 👷 Github Actions — Lint, Test your code on Master Branch, Automatic Storybook Deployment
- 📗 State Management - Zustand

## 📂 Directory structure

    root
    ├── apps
    ├──── nextjs-app       # chat app
    ├── libs
    ├──── features         # all of the code for a feature and putting it in one single place (ex) todo)
    ├─────── chat-room
    ├────────── apis
    ├────────── components
    ├────────── interfaces
    ├────────── utils
    ├─────── chat-room-message
    ├────────── apis
    ├────────── components
    ├────────── hooks
    ├────────── interfaces
    ├────────── stores
    ├──── shared
    ├─────── apis          # initalize api setup, add api middleware
    ├─────── hooks         # shared hooks (ex) timer, debounce...)
    ├─────── interfaces    #
    ├─────── ui-components # shared ui components, styles (ex) Button, Text... )
    ├─────── utils         # shared utils (ex) string, datetime, object, uri ...)
    └── README.md

## ⚡️ Getting Started

### Install dependencies

```bash
npm i --legacy-peer-deps
```

### Run the development server

You can start the nextjs using this command:

```bash
npm run dev
```

### Run the storybook

You can start the storybook using this command:

```bash
npm run ui-components:storybook
```

## Testing

## 📚 Convention

### Naming Convention

- 파일 이름 네이밍
  - 하이픈 형식 ex) z-index.ts, login-modal.tsx ...
- 컴포넌트명 네이밍
  - ex) const LoginModal = () => { ... }
- 패키지, 폴더명 단수or복수 네이밍

  - 여러파일이 들어갈거같다면 복수명으로
    ex) shared/styles, shared/libs ...
  - 고유 기능을 의미한다면 단수
    ex) app/email, app/login ...

### Commit Convention

- This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

## Deployment

- Heroku: https://room-messages.herokuapp.com/
  - Heroku main브랜치 기준 수동 배포
- Storybook: https://bobeenlee-room-messages.surge.sh/?path=/story/chatroommessageappbar--primary
  - Surge 서비스를 이용하여 static 스토리북 페이지 수동 배포

### Heroku Deployment

```
heroku container:login

npm run nextjs-app:deploy:production

docker tag DOCKER_IMAGE_ID registry.heroku.com/room-messages/web

docker push registry.heroku.com/room-messages/web

heroku container:release web --app=room-messages
```
