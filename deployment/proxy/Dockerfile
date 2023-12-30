FROM nginx:1.24-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./certificate/cert.crt /etc/nginx/cert.crt
COPY ./certificate/private.key /etc/nginx/private.key

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]