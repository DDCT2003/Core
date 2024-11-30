# Etapa de compilación
FROM node:18 AS build

WORKDIR /app

# Copiar archivos esenciales y las dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación (React genera la carpeta `build`, no `dist`)
RUN npm run build

# Etapa de producción
FROM node:18 AS production

WORKDIR /app

# Copiar el contenido de la carpeta `build` creada en la etapa de compilación
COPY --from=build /app/build ./build

# Copiar el package.json e instalar dependencias de producción
COPY package*.json ./
RUN npm install --production

# Exponer el puerto que normalmente usa React (3000)
EXPOSE 3000

# Iniciar la aplicación
CMD ["npx", "serve", "-s", "build"]
