FROM node:10-alpine as build

RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh yarn

RUN mkdir /app

WORKDIR /app

COPY package.json .

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./
CMD ["npm", "start"]