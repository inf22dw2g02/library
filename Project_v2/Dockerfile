FROM node:16

WORKDIR /api
COPY . /api
COPY package*.json ./
RUN npm i
EXPOSE 8080
RUN chmod +x startup.sh
RUN npm i -g sequelize-cli
RUN npm i -g nodemon

ENTRYPOINT [ "./startup.sh" ]