FROM node:14-alpine

RUN apk update && \
    apk add --no-cache bash file

WORKDIR /opt/app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "serve"]