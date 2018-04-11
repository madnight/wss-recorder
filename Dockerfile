FROM node:9.11.1

RUN mkdir -p /app/src/

WORKDIR /app/src/

# it takes a moment to boot up mongodb thats why sleep
CMD sleep 5 && npm run start

