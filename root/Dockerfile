FROM node:14-alpine as build-stage

WORKDIR /usr/src/app

COPY package* ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:14-alpine

RUN npm install -g serve

COPY --from=build-stage /usr/src/app/out/ /usr/src/app

EXPOSE 8080

CMD serve -l 8080 -s /usr/src/app