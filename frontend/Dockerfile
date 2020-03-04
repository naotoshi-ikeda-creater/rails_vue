FROM node:12.9.0-alpine

ENV APP_HOME /app_name
ENV PATH ${APP_HOME}/node_modules/.bin:$PATH
ENV TZ Asia/Tokyo

ENV HOST 0.0.0.0
ENV PORT 8080

WORKDIR ${APP_HOME}

RUN apk update && \
    apk upgrade &&\
    npm install -g npm && \
    npm install -g @vue/cli

# install dependencies in package.json
RUN npm install

COPY . ${APP_HOME}

EXPOSE ${PORT}
CMD ["/bin/sh"]