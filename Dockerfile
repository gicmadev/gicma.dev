FROM node AS build

WORKDIR /app

COPY package* ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable

COPY --from=build /app/public/ /var/www

COPY ./nginx.conf /etc/nginx/conf.d/default.conf.template

ENV uri \$uri
ENV PORT 80
ENV SERVER_NAME _

CMD [“sh”, “-c”, “envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g ‘daemon off;’”]
