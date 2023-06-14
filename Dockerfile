FROM registry.access.redhat.com/ubi8/nodejs-14-minimal as build-stage

ENV TZ="Europe/Helsinki"

WORKDIR /opt/app-root/src

COPY package* ./

RUN npm ci

COPY . .

RUN npm run build

FROM registry.access.redhat.com/ubi8/nodejs-14-minimal

RUN npm install -g serve

COPY --from=build-stage /opt/app-root/src/out/ /opt/app-root/src

EXPOSE 8080

CMD serve -l 8080 -s /opt/app-root/src
