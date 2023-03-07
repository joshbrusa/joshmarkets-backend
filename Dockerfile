FROM node
WORKDIR /code
COPY package*.json ./
RUN npm install
COPY . .
RUN prisma generate

RUN npm run build

EXPOSE 80

CMD [ "npm", "start"]