# badprog.com

# Image base
FROM node:24-alpine

# Run
RUN apk update && apk add --no-cache \
    git \
    tree \
    nano \
    && rm -rf /var/cache/apk/*

# Where to work
WORKDIR /workspace

# Copy
COPY package*.json ./

# Dependencies 
RUN npm install && \
    npm install --save-dev jest eslint

# Copy all
COPY . .

# Configuring ESLint
RUN npx eslint --init \
    --config recommended \
    --env node \
    --ext .js \
    --no-install || true

# Command
CMD ["npm", "test"]
