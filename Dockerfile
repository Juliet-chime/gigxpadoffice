# Use a Node.js base image with the desired version
FROM node:16-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install npm dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your application files to the container
COPY . .

# Expose the port your React Native app will run on (default is 19000)
EXPOSE 3000

# Create a production build (adjust as needed)
RUN npm run build

# Start your React Native application
CMD ["npm", "start"]
