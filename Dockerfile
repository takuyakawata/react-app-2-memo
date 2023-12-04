FROM node:latest

WORKDIR /react-app2
COPY . .

RUN  npm install

CMD ["npm","run","dev"]