FROM node:22-alpine
LABEL authors="piotr s"

WORKDIR /app

COPY endpoint.sh /build/endpoint.sh
COPY ./code /app

ENTRYPOINT ["sh", "/build/endpoint.sh"]