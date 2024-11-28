# Stage 1: Build the React app using Vite
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the built app
FROM node:18-slim

WORKDIR /app

# Install http-server to serve the app
RUN npm install -g http-server

# Copy the dist folder from the build stage
COPY --from=dist /app/dist /app/dist

# Expose port 2525
EXPOSE 2525

# Command to run the server on port 2525
CMD ["http-server", "dist", "-p", "2525"]
