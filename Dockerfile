FROM nginx:stable

COPY public/ /var/www

COPY ./nginx.conf /etc/nginx/conf.d/default.conf.template

ENV uri \$uri
ENV PORT 80
ENV SERVER_NAME _

CMD ["sh", "-c", "envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
