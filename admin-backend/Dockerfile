# Etapa de compilación
FROM node:18 AS build

# Configuración del directorio de trabajo
WORKDIR /app

# Copiar archivos esenciales y las dependencias
COPY package*.json ./
RUN npm install -g @nestjs/cli
RUN npm install

# Copiar el código fuente
COPY . .

# Construir el proyecto
RUN npm run build

# Etapa de producción
FROM node:18 AS production

# Configurar el directorio de trabajo
WORKDIR /app

# Copiar el código compilado y los archivos necesarios
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm install --production

# Exponer el puerto que utiliza la aplicación (3000 por defecto)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "dist/main.js"]
