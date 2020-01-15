# Requirements

- [Docker](https://docs.docker.com/install/)
- Docker Compose
- Prisma
- NodeJS
- yarn
- dotenv-cli

# Run required services

Copy the `.env.example` and rename it to `.env`, fill up the details.
Goto project folder from your terminal,

```
docker-compose up --build -d
```

# Run App

```sh
yarn
alias devops="dotenv -e .env yarn workspace"
devops backend deploy # deploy prisma from backend
devops backend start
devops frontend start
```