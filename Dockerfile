FROM registry.access.redhat.com/ubi9/nodejs-18-minimal AS build-stage

ENV TZ="Europe/Helsinki"

WORKDIR /opt/app-root/src

COPY package* ./

RUN npm ci

COPY . .

RUN npm run build

FROM registry.access.redhat.com/ubi9/nodejs-18-minimal

ENV NODE_ENV=production

WORKDIR /opt/app-root/src

COPY --from=build-stage /opt/app-root/src/.next/ ./.next/
COPY --from=build-stage /opt/app-root/src/public/ ./public/
COPY --from=build-stage /opt/app-root/src/package.json ./package.json
COPY --from=build-stage /opt/app-root/src/package-lock.json ./package-lock.json
COPY --from=build-stage /opt/app-root/src/src/content ./src/content

RUN npm ci

EXPOSE 8080

CMD ["npm", "start", "--", "-p", "8080"]
