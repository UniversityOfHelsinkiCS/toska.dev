FROM registry.access.redhat.com/ubi9/nodejs-18-minimal as build-stage

ENV TZ="Europe/Helsinki"

WORKDIR /opt/app-root/src

COPY package* ./

RUN npm ci

COPY . .

RUN npm run build

FROM registry.access.redhat.com/ubi9/nodejs-18-minimal

WORKDIR /opt/app-root/src

COPY --from=build-stage /opt/app-root/src/.next/ /opt/app-root/src/.next/
COPY --from=build-stage /opt/app-root/src/public/ /opt/app-root/src/public/
COPY --from=build-stage /opt/app-root/src/package.json /opt/app-root/src/package.json
COPY --from=build-stage /opt/app-root/src/package-lock.json /opt/app-root/src/package-lock.json

RUN npm ci --production

EXPOSE 3000

CMD ["npm", "start"]
