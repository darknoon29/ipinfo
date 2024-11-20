# Use the official Node.js image as the base image
FROM node:23.2.0-alpine

# Set the environment to production
ENV NODE_ENV=production

# Install OpenSSL
RUN apk add --no-cache openssl

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose ports 443 (HTTPS) and 1433
EXPOSE 443
EXPOSE 1433

# Start the Node.js server
CMD ["node", "server.js"]