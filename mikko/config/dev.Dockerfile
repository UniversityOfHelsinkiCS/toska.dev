FROM node

WORKDIR /usr/src/app

COPY . .

CMD ["npm", "run", "dev"]