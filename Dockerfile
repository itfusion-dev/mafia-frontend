FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 8001
CMD ["npm", "start"]
