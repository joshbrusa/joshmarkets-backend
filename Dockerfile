FROM node
WORKDIR /code

COPY package*.json ./
RUN npm install

COPY tsconfig.json .env ./
COPY src src
COPY prisma prisma
RUN npx prisma generate
RUN npm run build

EXPOSE 80
CMD [ "npm", "start"]