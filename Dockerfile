FROM node:20-alpine
WORKDIR /usr/src/app
COPY app ./app
COPY app/package.json .
ENV NODE_ENV=production
EXPOSE 3000
CMD [ "npm", "start" ]