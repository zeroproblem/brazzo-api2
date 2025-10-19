# Use the official Node.js 18 LTS image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /opt/app

# --- START: FIX ---
# Install build tools for native node_modules (like sharp)
# Then remove them after installation to keep the image small
RUN apk add --no-cache --virtual .gyp \
        python3 \
        make \
        g++ \
    && apk add --no-cache libc6-compat \
    && npm install -g npm@latest
# --- END: FIX ---

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# --- START: FIX ---
# Remove the build tools
RUN apk del .gyp
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
