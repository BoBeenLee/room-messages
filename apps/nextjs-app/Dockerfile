FROM --platform=linux/amd64 node:14.17.1-alpine3.11

WORKDIR /app
COPY ./dist/apps/nextjs-app .

ENV PORT 3000
ENV NEXT_DIR .
ENV NODE_ENV production
ENV API_URL https://room-messages.herokuapp.com/

RUN npm install --force

EXPOSE 3000

CMD ["node", "main.js"]
