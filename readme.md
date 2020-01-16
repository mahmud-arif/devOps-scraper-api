# Requirements

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [NodeJS](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)
- Prisma (`yarn global add prisma`)
- dotenv-cli(`yarn global add dotenv-cli`)

# Run required services

Copy the `.env.example` and rename it to `.env`, fill up the details.
Goto project folder from your terminal,

```
docker-compose up --build -d

# PORT 6379, HOST 127.0.0.1
docker run --name my-redis-container -p 6379:6379 -d redis

```

# Run App

```sh
yarn
alias devops="dotenv -e .env yarn workspace"

# deploy prisma from backend
devops backend deploy 

# start backend, runs at http://localhost:4000
devops backend start 

# start scraper queue
devops scraper start 

# start frontend, runs at http://localhost:3000
devops frontend start 
```