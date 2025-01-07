# Use a base image that works on ARM
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Build the app
RUN npm run build

EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
