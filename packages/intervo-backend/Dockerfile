# Use a stable Node.js image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json first (for caching install)
COPY package*.json ./

# Install with legacy peer deps
RUN npm install --legacy-peer-deps

# Copy the rest of your code
COPY . .

# Build the backend (adjust the workspace name if needed)
RUN npm run build --workspace=intervo-backend

# Expose your backend port (change if different)
EXPOSE 3001

# Start backend in production
CMD ["npm", "run", "start", "--workspace=intervo-backend"]
