FROM nginxinc/nginx-unprivileged:1.21.6-alpine
COPY ./docker/proxy/default.conf /etc/nginx/conf.d/default.conf
COPY ./docker/proxy/uwsgi_params /etc/nginx/uwsgi_params

USER root

RUN mkdir -p /vol/static
RUN chmod 755 /vol/static