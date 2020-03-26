FROM node:alpine as install

WORKDIR /usr/src/app

COPY package* ./

RUN npm ci

FROM node:alpine

WORKDIR /usr/src/app

COPY --from=install /usr/src/app/ /usr/src/app/

COPY . .

CMD ["npm", "start"]