# Use the official Node.js 18 LTS slim image (Debian-based)
FROM node:18-slim

# Set the working directory in the container
WORKDIR /opt/app

# Install build tools for native node_modules (like sharp)
# Then clean up the apt cache to keep the image small
RUN apt-get update && \
    apt-get install -y python3 make g++ && \
    rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy the rest of the application code
COPY . .

# Build the Strapi admin panel
RUN npm run build

# Expose the port Strapi runs on
EXPOSE 3000

# Set the environment to production
ENV NODE_ENV=production

# The command to run the application
CMD ["npm", "run", "start"]
