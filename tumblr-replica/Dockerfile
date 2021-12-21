# Stage 1 - Building image
FROM node:14-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
#Added new:
RUN npm install json-server -g --silent

COPY . .

EXPOSE 3000
#CMD [ "npm", "start" ]
#CMD ["npm","json-server", "-p", "8000", "-w", "data/db.json"]
# Expose port
# Start the app

CMD ["npm", "start", "json-server", "-w", "data/db.json", "-p", "8000"]