# Use the official Node.js image as the base image
FROM node:22-alpine

# Set the environment to production
ENV NODE_ENV=production

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose 1433
EXPOSE 1433

# Start the Node.js server
CMD ["node", "server.js"]
