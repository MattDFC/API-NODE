# Api Rest en Node.js
Descripción
API REST para gestión de productos desarrollada con Node.js y Express.

------------------------------------------------------------
Instalación
Clonar el repositorio

```bash
git clone https://github.com/MattDFC/API-NODE
```

### Instalar dependencias:
```bash
npm install
```
```bash
npm install -g nodemon
```
------------------------------------------------------------
### Configurar variables de entorno:

Crear el archivo .env
```bash
PORT=

FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSENGER_SENDER_ID=
FIREBASE_APP_ID=

JWT_SECRET=
```
Luego completar los datos requeridos en el archivo .env con los valores correspondientes para tu entorno.
------------------------------------------------------------

Ejecutar en modo desarrollo:
```
npm run dev
```
Para correr constantemente con los cambios del codigo usar nodemon:
```
nodemon src/index.js
```
------------------------------------------------------------
# Documentación de la API

## Loguearse con POST /login
### Descripción: Devuelve un token JWT para autenticar las peticiones.
### Body (JSON):
```
{
  "email": "cliente@gmail.com",
  "password": "client1234"
}
```
------------------------------------------------------------

## Obtener todos los productos con  GET /products
### Descripción: Devuelve la lista de todos los productos. Respuesta ejemplo:
```
[
  { "id": 1, "name": "ThinkPad X1 Carbon Gen 11 (14" Intel)", "price": 3000 },
  { "id": 2, "name": "HP 250 G10 Intel Core i7-1355U 32GB RAM 1TB SSD 15.6" Intel Iris Xe FreeDOS Gris Oscuro", "price": 1200 },
  { "id": 3, "name": "Yoga Slim 7i Gen 10 Aura Edition (14" Intel)", "price": 2000 }
]
```
------------------------------------------------------------

## Obtener producto por ID con GET /products/:id

### Descripción: Devuelve un producto específico por su ID. Parámetros:
id (path, requerido): ID del producto.
### Ejemplo de uso: /products/1
### Respuesta ejemplo:
```
[{ "id": 1, "name": "ThinkPad X1 Carbon Gen 11 (14" Intel)", "price": 3000 }]
```

------------------------------------------------------------

## Crear un producto con POST /products
### Descripción: Crea un nuevo producto.
### Body (JSON):
```
{
  "name": "Nuevo Producto",
  "price": 999,
}
```
Respuesta ejemplo:
```
{
  "id": 4,
  "name": "Nuevo Producto",
  "price": 999,
}
```
------------------------------------------------------------

## Actualizar un producto con PUT /products/:id
### Descripción: Actualiza completamente un producto existente. Parámetros:
id (path, requerido): ID del producto a actualizar.
### Body (JSON):
```
{ "name": "Producto Actualizado", "price": 500 }
```
Respuesta ejemplo:
```
{ "id": 1, "name": "Producto Actualizado", "price": 500 }
```

------------------------------------------------------------

## Actualizar parcialmente un producto con PATCH /products/:id
### Descripción: Actualiza parcialmente un producto existente. Parámetros:
id (path, requerido): ID del producto a actualizar.
### Body (JSON): Solo los campos que se desean actualizar
```
{ "price": 600 }
```
Respuesta ejemplo:
```
{ "id": 1, "name": "ThinkPad X1 Carbon Gen 11 (14" Intel)", "price": 3600 }
```

------------------------------------------------------------

## Eliminar un producto con DELETE /products/:id
### Descripción: Elimina un producto por su ID. Parámetros:
id (path, requerido): ID del producto a eliminar.
### Respuesta: 204 No Content

### Códigos de estado:
- 200 - OK: Operación exitosa
- 201 - Created: Recurso creado exitosamente
- 204 - No Content: Recurso eliminado exitosamente
- 400 - Bad Request: Datos de entrada inválidos
- 404 - Not Found: Recurso no encontrado

------------------------------------------------------------

Estructura del proyecto:
```
src/
├── controllers/
│   ├── authcontrollers.js
│   └── productosController.js
├── middlewares/
│   └── authmiddleware.js
├── models/
│   ├── firebase.js
│   └── productosmodel.js
├── routes/
│   ├── authRoutes.js
│   └── productosRoutes.js
├── services/
│   ├── manejoErrores.js
│   └── modularizaciones.js
└── Index.js
.env
.gitignore
package-lock.json
package.json
README.md
vercel.json
```
------------------------------------------------------------

## Tecnologías utilizadas:
- Node.js
- Express.js
- Nodemon
- JSON Web Token (JWT) Debugger
- ES6 Modules
- Vercel
- Firestore

------------------------------------------------------------

# Autor:
## Linkedln: Matias Daniel Falon Coviello
## GitHub: https://github.com/MattDFC
