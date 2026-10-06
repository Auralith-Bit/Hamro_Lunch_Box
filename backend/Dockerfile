FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-lock.json ./
COPY backend/package.json backend/package.json
COPY frontend/package.json frontend/package.json
RUN npm ci --workspace @hamro-lunch-box/backend --include-workspace-root=false
COPY backend/src ./backend/src
WORKDIR /app/backend
EXPOSE 3000
CMD ["node", "src/server.js"]
