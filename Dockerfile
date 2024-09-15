# Etapa 1: Construir a aplicação
FROM node:18-alpine AS build

WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o código fonte
COPY . .

# Rodar o build da aplicação
RUN npm run build

# Etapa 2: Servir a aplicação
FROM node:18-alpine AS serve

WORKDIR /app

# Instalar uma ferramenta para servir arquivos estáticos (como serve ou http-server)
RUN npm install -g serve

# Copiar os arquivos do build
COPY --from=build /app/dist ./dist

# Definir o comando para servir a aplicação
CMD ["serve", "-s", "dist", "-l", "3000"]
