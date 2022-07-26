FROM node:17.6.0-alpine3.15
WORKDIR /app
COPY package*.json /
COPY gulpfile.js /
RUN npm install
RUN npm install -g gulp-cli
COPY ./app/scss ./scss
RUN mkdir /app/static
USER root