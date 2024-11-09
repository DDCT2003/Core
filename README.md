# Clothing Store App
Esta es una aplicación web de gestión de una tienda de ropa que permite a los usuarios registrarse, iniciar sesión y acceder a diferentes vistas según su rol. La aplicación cuenta con un sistema de roles basado en autenticación, que distingue entre administradores (admin) y usuarios regulares (user). La interfaz de usuario está desarrollada en React, mientras que el backend utiliza NestJS. La base de datos empleada es MongoDB Atlas.

## Características
- Autenticación de usuario: Los usuarios pueden registrarse e iniciar sesión.
- Roles y permisos: Los roles se asignan automáticamente; los administradores tienen acceso a un CRUD de prendas, mientras que los usuarios tienen acceso a la tienda de ropa.
- Registro de usuarios: Los usuarios se registran con el rol predeterminado de "user".
- Protección de rutas: Las rutas están protegidas para que solo los usuarios autenticados puedan acceder.

## Tecnologías utilizadas
- Frontend: React
- Backend: NestJS
- Base de datos: MongoDB Atlas

## Funcionalidades
- Inicio de sesión: Los usuarios pueden iniciar sesión y ser redirigidos a diferentes rutas según su rol.
- Registro: Los nuevos usuarios se registran con el rol de "user".
- Rutas protegidas: Acceso a las rutas restringido según autenticación y rol.
- Sistema de roles:
 - Admin: Puede acceder a un CRUD de prendas.
 - User: Puede acceder a la tienda de ropa.

## Instalación y configuración
Sigue estos pasos para configurar el proyecto localmente:

## Prerrequisitos
Node.js y npm instalados.
MongoDB Atlas para la base de datos.

### Paso 1: Clonar el repositorio
- git clone (https://github.com/DDCT2003/Core.git)
- cd Core

### Paso 2: Configurar el backend (NestJS)
Entra en el directorio del admin-backend:
cd admin-backend
Instala las dependencias:
npm install
Inicia el servidor:
npm run start

### Paso 3: Configurar el frontend (React)
Entra en el directorio del frontend:
- cd ../admin-frontend
Instala las dependencias:
- npm install
Inicia el servidor de desarrollo:
- npm start

## Uso
- Registro: Completa el formulario de registro para crear una cuenta de usuario (rol: user).
- Login: Accede con tu usuario y contraseña.
- Admin: Acceso al CRUD de prendas de ropa.
- User: Acceso a la tienda de ropa.
- Protección de rutas: Solo los usuarios autenticados pueden acceder a las rutas protegidas según sus permisos.


## Estructura del proyecto

```

├── admin-backend
│   ├── src
│   │   ├── user  // carpeta user
│   │   │  ├── schemas  // carpeta de schema
│   │   │  |  ├── user.schemas.ts  
│   │   |  ├── user.controller.ts
│   │   |  ├── user.model .ts
│   │   |  ├── user.module.ts
│   │   |  ├── user.service.ts
│   │   ├── app.module 
│   |   ├── main.ts   // Archivo principal de arranque de NestJS
├── frontend
│   ├── src
│   │   ├── components // Componentes de React
│   │   ├── pages      // Páginas de la aplicación
│   │   └── context   // contexto para proteger las rutas
└── README.md
```

## Contribuciones
Las contribuciones son bienvenidas. Puedes contribuir en mejoras de diseño, corrección de errores o agregar nuevas funcionalidades.

## Licencia
- Este proyecto está bajo la Licencia MIT.

## Autor
- Desarrollado por Dylan.


