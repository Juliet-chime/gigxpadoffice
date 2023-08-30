# FROM node:16
# # Create app directory
# WORKDIR /usr/src/gigx-admin
# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./
# RUN npm install --legacy-peer-deps
# #To bundle your app’s source code inside the Docker image, use the COPY instruction:
# COPY . .
# #Your app binds to port 3000 so you’ll use the EXPOSE instruction to have it mapped by the docker daemon:
# EXPOSE 3000
# CMD ["npm", "start"]

# Use a multi-stage build to optimize the image size
# Stage 1: Build the React application
FROM node:16-alpine as build

# Set working directory
WORKDIR /usr/src/gigx-admin

# Install app dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Bundle app source
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the React application from Nginx
FROM nginx:alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy static build directory from build stage
COPY --from=build /usr/src/gigx-admin/build /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3000
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
