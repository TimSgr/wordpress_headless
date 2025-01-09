# Stage 1: Build the application
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY eslint.config.mjs ./
COPY next.config.js ./
COPY postcss.config.mjs ./
COPY tailwind.config.js ./

# Install dependencies (inkl. devDependencies)
RUN npm install

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image
FROM node:22-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy only the build output and production dependencies from the builder
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/*.js ./
COPY --from=builder /usr/src/app/*.mjs ./

# Expose the application port
EXPOSE 3000

# Ensure node_modules/.bin is in the PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Start the application
CMD ["npm", "run", "dev"]

