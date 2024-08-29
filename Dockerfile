FROM node:20.15.0-alpine AS base
# Base stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Development stage
FROM base AS development
COPY . .
CMD ["npm", "run", "dev"]

# Production stage
FROM base AS production
COPY . .
RUN npm run build
CMD ["npm", "start"]