FROM node:alpine

RUN apk add --no-cache git bash

WORKDIR /app

EXPOSE 3000

RUN git clone https://github.com/mdpalkin/CalmAPI.git \
    && cd CalmAPI \
    && npm i -g pnpm \
    && pnpm install

WORKDIR /app/CalmAPI

CMD ["pnpm", "run", "start:dev"]
