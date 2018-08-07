FROM ubuntu:xenial

RUN apt-get update -qq
RUN apt-get install -y socat git software-properties-common python-software-properties postgresql-client-9.5 postgresql-client-common

RUN apt-get update -qq
RUN apt-get install -y python3-pip python3-psycopg2 libpq-dev libffi-dev libssl-dev python3-dev gunicorn libmagic1


RUN mkdir /code
ADD . /code/
WORKDIR /code
RUN pip3 install -r requirements.txt


EXPOSE 8000