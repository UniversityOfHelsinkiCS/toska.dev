FROM node:24 AS build-stage

ENV TZ="Europe/Helsinki"

WORKDIR /opt/app-root/src
COPY package* .npmrc ./

RUN npm ci

COPY . .

RUN npm run build && chmod -R a+rX out

FROM nginxinc/nginx-unprivileged:stable-alpine

COPY --chmod=644 nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /opt/app-root/src/out/ /usr/share/nginx/html/

EXPOSE 8080
