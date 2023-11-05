# Use the base image with Node.js
FROM node:10.24

# Copy the current directory into the Docker image
COPY . /micro-frontends-angular-app

# Set working directory for future use
WORKDIR /micro-frontends-angular-app

# Install the dependencies from package.json
RUN npm install

RUN npm run build

CMD npm start
