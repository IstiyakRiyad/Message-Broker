FROM node:alpine

WORKDIR /usr/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
CMD ["npm", "start"]
EXPOSE 5000
