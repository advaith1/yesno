FROM node:16
WORKDIR /app
COPY . .
RUN apt update && apt install build-essential -y
RUN corepack enable
RUN pnpm i
CMD ["pnpm", "start"]
