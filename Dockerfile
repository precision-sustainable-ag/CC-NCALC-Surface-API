FROM node:18
WORKDIR /
COPY . .
RUN npm install
EXPOSE 1002
ENTRYPOINT npm start