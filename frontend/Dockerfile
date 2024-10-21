# Step 1: Use a Node.js base image
FROM node:18-alpine

# Step 2: Set the working direcory inside the container
WORKDIR /frontend

# Set the environment variable:
ENV NODE_ENV=production 

# Step 3: Copy the package.json and package-lock.json files
COPY package*json ./

# Step 4: Install project dependencies
RUN npm install 

# Step 5: Copy the rest of application source code
COPY . .

# Step 6: Build for production
RUN npm run build && \
     npm prune --production

# SSTEP 7: Expose the port client runs on.
EXPOSE 3000

# Step 8: Run your application.
CMD ["npm", "start"]