FROM node:13-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

RUN mkdir -p /home/app

<<<<<<< HEAD
COPY . /home/app

CMD ["node", "app.js"]
=======
CMD ["node", "/home/app/app.js"]
>>>>>>> d45fb4f30a6e2ff0a619795af55e0d4d4d68a58a
