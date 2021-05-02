FROM node:14-buster
WORKDIR /app
COPY . .
RUN apt update && apt install build-essential -y
RUN curl -L https://unpkg.com/@pnpm/self-installer | node
RUN pnpm i
CMD ["pnpm", "start"]
