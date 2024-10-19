# Step 1: Use a Node.js base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /server

# Set the environment variable for the server side
ENV NODE_ENV=production

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install project dependencies
RUN npm install

# Step 5: Copy the rest of the application source code
COPY . .

# Step 6: Build for production (optional for server)
# RUN npm run build && npm prune --production

# Step 7: Expose the port the server runs on
EXPOSE 8000

# Step 8: Start the server
CMD ["npm", "start" ]

