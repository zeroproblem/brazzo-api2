# Use the official Node.js 18 LTS image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /opt/app

# --- START: FIX ---
# 1. Update the package repository index
# 2. Install build tools for native node_modules (like sharp)
# 3. Install libc6-compat for compatibility
RUN apk update && \
    apk add --no-cache --virtual .build-deps \
        python3 \
        make \
        g++ \
    && apk add --no-cache libc6-compat
# --- END: FIX ---

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# --- START: FIX ---
# Remove the build tools to keep the final image small
RUN apk del .build-deps
# --- END: FIX ---

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
