FROM node:21-alpine as builder

RUN apk add --no-cache make

WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm i

COPY . .
RUN npm run build && make db-build

FROM node:21-alpine as runner

RUN apk add --no-cache make

WORKDIR /app

COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/makefile ./makefile

COPY --from=builder /app/entrypoint.sh .

ENV NODE_ENV=production
RUN npm i

EXPOSE 3000

ENTRYPOINT ["sh", "/app/entrypoint.sh"]