FROM node:14
WORKDIR /app
COPY . .
RUN apt update && apt install build-essential -y
RUN npm i ts-node
RUN npm i
CMD ["npm", "start"]
