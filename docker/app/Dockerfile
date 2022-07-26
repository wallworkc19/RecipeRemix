FROM python:3.9-alpine

ENV PATH="/scripts:${PATH}"
WORKDIR /app
COPY . .
COPY ./requirements.txt requirements.txt
COPY ./docker/app/uwsgi.ini /uwsgi.ini
RUN apk add --update --no-cache --virtual .tmp postgresql-dev gcc python3-dev libc-dev linux-headers
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --no-cache-dir uWSGI==2.0.20
RUN apk del .tmp
COPY ./docker/scripts /scripts
COPY ./.env .env
RUN chmod +x /scripts/*
RUN mkdir -p /app/static
RUN chmod -R 777 /app/static
RUN chown -R root:root /app/static
USER root

CMD ["entrypoint-app.sh"]