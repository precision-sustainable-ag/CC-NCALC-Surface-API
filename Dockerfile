FROM node
COPY . .
RUN npm install
ENTRYPOINT npm start
EXPOSE 80
