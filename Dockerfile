FROM node:16.15-alpine3.14

# set a directory for the app
WORKDIR /usr/src/app

# copy all the files to the container
COPY . .

# install pnpm globally
RUN npm install pnpm -g

# install project dependencies
RUN pnpm install

# define the port number the container should expose
EXPOSE 5000

# run the command
CMD ["node", "./app.js"]
