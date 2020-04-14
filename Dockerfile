FROM alpine:latest
ENV PORT=3000
RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE $PORT
ENTRYPOINT ["node"]
CMD ["server.js"]
