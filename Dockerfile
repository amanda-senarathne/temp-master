FROM node:12-alpine as base

ENV NODE_ENV=development

WORKDIR /src
COPY package.json /src/
EXPOSE 3000

RUN npm install -g nodemon && npm install
CMD ["nodemon", "server.js"]