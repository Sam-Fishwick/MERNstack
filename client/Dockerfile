## Dockerfile for React client

# Pull Node image
FROM node:18

# Working directory
WORKDIR /usr/src/app

# Copy npm dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local files
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD ["npm", "start"]
