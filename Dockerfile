FROM node:23 AS builder

WORKDIR /src

#install angular cli
RUN npm i -g @angular/cli

COPY src src
COPY public public
#copy all json files
COPY *.json .
#Only do . with single files, not directories


#install dependencies, ci clean install
RUN npm ci && ng build

#build the angular app
#RUN ng build


FROM caddy:2-alpine

LABEL maintainer="jonah"

WORKDIR /www

#Copy the compiled angular from builder
COPY --from=builder /src/dist/vttp5_csf_day01task/browser html
COPY Caddyfile .
ENV PORT=8080
EXPOSE ${PORT}

SHELL ["/bin/sh", "-c"]
ENTRYPOINT caddy run --config Caddyfile
