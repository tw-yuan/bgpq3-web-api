FROM node:18
WORKDIR /app

# install bgpq3
RUN apt-get update -y
RUN apt-get install -y bgpq3

# Copy file
COPY app.js /app/app.js
COPY package-lock.json /app/package-lock.json
COPY package.json /app/package.json

# install module
RUN npm i

# run
CMD [ "node", "app.js" ]
