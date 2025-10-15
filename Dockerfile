# ---------- BASE IMAGE ----------
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
RUN npm install

# ---------- DEV ----------
FROM node:20-alpine AS development

WORKDIR /app

# Instala dependências primeiro (cache mais eficiente)
COPY package*.json ./
RUN npm install

# Copia todo o código
COPY . .

# Vite precisa escutar em 0.0.0.0 dentro do container
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

