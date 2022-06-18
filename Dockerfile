FROM node:alpine
WORKDIR /app

COPY base-app/package.json .
RUN npm install

COPY ./base-app .

CMD ["npm","start"]