## Dockerfile for React client

# Pull Node image
FROM node:18

# Working directory
WORKDIR /usr/src/app

# Copy npm dependencies
COPY package*.json ./

# Create a vite react app (should do this locally and copy over later)
# RUN npm install create-vite@4.4.1 &&\
#    npm create vite@4.4.1 client -- --template react &&\
#    cd client/

# Install dependencies
RUN npm install

# Copy local files
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD ["npm", "run", "dev"]
