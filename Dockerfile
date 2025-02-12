# build environment
FROM node:18-alpine3.18 AS builder

# app dir
# RUN mkdir -p /app
WORKDIR /app

# copy all working file
COPY ./package.json /app
COPY ./yarn.lock /app
COPY ./.env /app
COPY patches /app/patches
COPY packages /app/packages
RUN rm -f /.cache

# install dependencies
RUN npm cache clean --force
RUN yarn install
COPY . /app

# build app
RUN yarn build --no-optimization

EXPOSE 1337

# run app
CMD ["npm", "start"]
