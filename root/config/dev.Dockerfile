FROM jekyll/jekyll

WORKDIR /tmp

COPY jekyll/Gemfile* ./

RUN bundle install

WORKDIR /usr/src/app

COPY . .

RUN chown jekyll jekyll

CMD ["npm", "run", "dev"]