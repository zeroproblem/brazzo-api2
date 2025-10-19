# Use the official Node.js 18 LTS image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /opt/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Build the Strapi admin panel
RUN npm run build

# Expose the port Strapi runs on
EXPOSE 3000

# Set the environment to production
ENV NODE_ENV=production

# The command to run the application
# This uses the "start" script we defined in package.json
CMD ["npm", "run", "start"]
