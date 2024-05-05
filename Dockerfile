FROM oven/bun:latest
WORKDIR /app

# install bgpq3
RUN apt-get update -y
RUN apt-get install -y bgpq3

# Copy file
COPY app.js /app/app.js
COPY bun.lockb /app/bun.lockb
COPY package.json /app/package.json

# install module
RUN bun install

# run
CMD [ "bun", "run", "/app/app.js" ]
