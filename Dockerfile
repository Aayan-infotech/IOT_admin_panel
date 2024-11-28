# Stage 1: Build the React app using Vite
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application (output will be in 'dist' folder)
RUN npm run build

# Stage 2: Serve the built app
FROM node:18-slim

WORKDIR /app

# Install http-server to serve the app
RUN npm install -g http-server

# Copy the 'dist' folder from the build stage
COPY --from=build /app/dist /app/dist

# Expose port 2525
EXPOSE 2525

# Command to serve the app on port 2525
CMD ["http-server", "dist", "-p", "2525"]
