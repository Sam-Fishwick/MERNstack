## Dockerfile for Express server

# Pull Node image
FROM node:18

# Working directory
WORKDIR /usr/src/app/server

# Copy npm dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local files
COPY . .

# Expose port
EXPOSE 5000

# Run app
CMD ["npm", "start"]
