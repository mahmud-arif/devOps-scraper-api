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

# deploy prisma from backend
devops backend deploy 

# start backend, runs at http://localhost:4000
devops backend start 

# start scraper queue
devops scraper start 

# start frontend, runs at http://localhost:3000
devops frontend start 
```