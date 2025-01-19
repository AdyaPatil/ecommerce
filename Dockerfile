FROM node:20

WORKDIR /app/

# Copy the contents of the current directory to /app/
COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

