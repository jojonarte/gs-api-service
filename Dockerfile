FROM node:14-alpine as builder

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

RUN apk update && \
    apk add --no-cache bash file

COPY --from=builder opt/app/node_modules ./node_modules
COPY --from=builder opt/app/dist ./dist
COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]