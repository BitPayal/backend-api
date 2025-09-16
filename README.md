<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo"/>
  </a>
</p>

<p align="center">
  <b>A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient, scalable, and enterprise-grade server-side applications.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version"/>
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License"/>
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads"/>
  </a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank">
    <img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI"/>
  </a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank">
    <img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/>
  </a>
  <a href="https://twitter.com/nestframework" target="_blank">
    <img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"/>
  </a>
</p>

---

# 🚀 NestJS Starter Project

A **NestJS + TypeScript starter** focused on a REST API with PostgreSQL, TypeORM, JWT auth, validation, and tests.  
This README shows how to set up, run, test, and deploy the project.

---

## ✨ Features

- RESTful CRUD APIs using NestJS controllers & services  
- PostgreSQL integration using TypeORM (entities & migrations)  
- JWT authentication + Passport strategies  
- Input validation with `class-validator` & `class-transformer`  
- Unit & E2E tests with Jest & `@nestjs/testing`  
- Swagger-ready (optionally) for API docs  
- Docker-friendly & cloud deployment ready

---

## 📋 Prerequisites

- Node.js v18+ (or LTS)  
- npm or yarn  
- PostgreSQL v12+ (local or Docker)  
- Git

---

## ⚙️ Quick Project Setup

```bash
# 1. clone
git clone https://github.com/your-username/backend-api.git
cd backend-api

# 2. install deps
npm install
# or
# yarn


```bash
backend-api/
├─ src/
│  ├─ modules/
│  │  ├─ users/
│  │  │  ├─ dto/
│  │  │  ├─ users.controller.ts
│  │  │  ├─ users.service.ts
│  │  │  └─ user.entity.ts
│  │  └─ auth/
│  │     ├─ auth.controller.ts
│  │     ├─ auth.service.ts
│  │     └─ jwt.strategy.ts
│  ├─ common/
│  │  ├─ filters/
│  │  ├─ guards/
│  │  └─ interceptors/
│  ├─ app.module.ts
│  └─ main.ts
├─ test/                 # e2e & unit tests
├─ ormconfig.ts          # or rely on TypeOrmModule & env
├─ .env.example
├─ .gitignore
└─ package.json


$ git clone https://github.com/your-username/backend-api.git
$ cd backend-api
$ npm install


## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## .env.example
PORT=3000

## PostgreSQL
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=nest_user
DATABASE_PASSWORD=nest_password
DATABASE_NAME=nest_demo

## TypeORM
TYPEORM_SYNCHRONIZE=true      # true only for dev, false in prod
TYPEORM_LOGGING=false

## JWT
JWT_SECRET=ChangeThisToAStrongSecret
JWT_EXPIRES_IN=3600s

psql -h localhost -U postgres -c "CREATE DATABASE nest_demo;"
## optionally create a dedicated db user:
psql -h localhost -U postgres -c "CREATE USER nest_user WITH PASSWORD 'nest_password';"
psql -h localhost -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE nest_demo TO nest_user;"
 
### 🔎 Explanation

## Run tests

```bash
- **src/** → main source code of the application  
  - **modules/** → contains feature modules following NestJS modular architecture (e.g., `users`, `auth`, etc.)  
  - **common/** → reusable pieces like custom exceptions, guards, interceptors, and pipes  
  - **main.ts** → entry point that bootstraps the NestJS app  
  - **app.module.ts** → root module that imports other modules  
- **test/** → contains Jest unit and end-to-end (E2E) test cases  
- **ormconfig.ts** → TypeORM configuration (database connection, entities, migrations)  
- **package.json** → dependencies, scripts, and metadata for the project  
- **README.md** → documentation for setup and usage  

---

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
---

## 🛠 Database Setup

Create a PostgreSQL database (example: `nest_demo`):

```bash
psql -h localhost -U postgres -c "CREATE DATABASE nest_demo;"
 
## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
