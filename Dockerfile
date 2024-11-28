# Stage 1: Build the React app using Vite
FROM node:18 AS build

WORKDIR /app

# Copy only necessary files
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Serve the built app in production mode
FROM node:18-slim

WORKDIR /app

# Install http-server to serve the app
RUN npm install -g http-server

# Copy the production build from the build stage
COPY --from=build /app/dist /app/dist

# Expose port 2525 for external access
EXPOSE 2525

# Serve the app in production mode
CMD ["http-server", "dist", "-p", "2525", "--prod"]
