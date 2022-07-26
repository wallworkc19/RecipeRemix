#!/bin/sh

set -e

python manage.py migrate --no-input
python manage.py collectstatic --noinput
uwsgi --ini /uwsgi.ini