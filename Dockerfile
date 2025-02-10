# build environment
FROM node:18-alpine3.18 AS builder

# app dir
# RUN mkdir -p /app
WORKDIR /app

# copy all working file
COPY ./package.json /app
# COPY ./package-lock.json /app
COPY ./yarn.lock /app
COPY ./.env /app
COPY patches /app/patches
COPY packages /app/packages
RUN rm -f /.cache

# install dependencies
RUN npm cache clean --force
# RUN yarn install --network-timeout 600000
# RUN yarn add sharp
# RUN yarn develop
RUN cd ./packages/strapi-plugin-tagsinput && yarn install && cd ../..
RUN npm cache clean --force
RUN yarn install
COPY . /app

# build app
# RUN yarn build
RUN ANALYZE=true yarn build

EXPOSE 1337

# run app
CMD ["npm", "start"]
