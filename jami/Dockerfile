FROM node:alpine as install

WORKDIR /usr/src/app

COPY package* ./

RUN npm ci

FROM node:alpine as build-stage

WORKDIR /usr/src/app

COPY --from=install /usr/src/app/ /usr/src/app/

COPY . .

RUN npm run build

FROM nginx

COPY --from=build-stage /usr/src/app/dist/ /usr/share/nginx/html