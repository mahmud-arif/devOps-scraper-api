FROM node:12

WORKDIR "/app"

COPY ./frontend/package.json ./frontend/package.json
COPY ./backend/package.json ./backend/package.json
COPY ./scraper/package.json ./scraper/package.json

COPY package.json package.json

RUN yarn
COPY . .