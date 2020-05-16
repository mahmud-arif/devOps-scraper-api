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

```sh
 # first  run this
 ENV_FILE=.env docker-compose -f docker-compose.prisma.yml  up --build -d
 
 # then run this. 
 ENV_FILE=.env docker-compose -f docker-compose.prisma.yml -f docker-compose.yml up --build

```

### Now visit --> http://localhost:80


# Error

If prisma not connect with backend. 

```
  TypeError: cannot read property Website of undefined
```

