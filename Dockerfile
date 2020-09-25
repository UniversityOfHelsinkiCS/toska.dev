FROM node:14-alpine as build-stage

WORKDIR /usr/src/app

COPY package* ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build-stage /usr/src/app/out/ /usr/share/nginx/html
