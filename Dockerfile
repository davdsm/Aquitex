# Step 1: Use Node image to build the project
FROM node

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the app
RUN npm run build

# Expose the port the app will run on
EXPOSE 80
EXPOSE 5050

# Start Nginx server
CMD ["npm", "run", "dev"]