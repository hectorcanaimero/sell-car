FROM node:18-alpine3.15

RUN apk add --no-cache bash

RUN npm config get registry

RUN npm i -g @nestjs/cli@9.0.0

RUN npm i -g bcrypt 

ENV DOCKERIZE_VERSION v0.6.1

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /usr/app

CMD [ "./start.sh" ]