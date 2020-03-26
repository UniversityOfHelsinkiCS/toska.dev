FROM jekyll/jekyll as build-stage

WORKDIR /tmp

COPY jekyll/Gemfile* ./

RUN bundle install

WORKDIR /usr/src/app

COPY . .

RUN chown jekyll jekyll

WORKDIR /usr/src/app/jekyll

RUN jekyll build

FROM node

WORKDIR /usr/src/app

COPY package* ./

RUN npm ci

COPY . .

COPY --from=build-stage /usr/src/app/jekyll/_site/ /usr/src/app/jekyll/_site/

CMD ["npm", "start"]