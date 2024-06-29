# 🎵 Music Albums Database API

¡Bienvenido a la API almbus musicales! Aquí encontrarás todo lo necesario para interactuar con mi base de datos de álbumes de música. Vamos a explorar los endpoints disponibles y cómo utilizarlos a través de Postman. 🚀

## 🌟 Endpoints Disponibles

1. [Insertar un nuevo álbum 📥](#1-insertar-un-nuevo-álbum-📥)
2. [Obtener un listado de todos los álbumes 📜](#2-obtener-un-listado-de-todos-los-álbumes-📜)
3. [Listar un álbum por autor 🔍](#3-listar-un-álbum-por-autor-🔍)
4. [Actualizar un álbum existente 🔄](#4-actualizar-un-álbum-existente-🔄)
5. [Borrar un álbum ❌](#5-borrar-un-álbum-❌)

### 1. Insertar un nuevo álbum 📥

**Endpoint:** `POST /musicDb`

**Descripción:** Inserta un nuevo álbum en la base de datos.

**Body de la solicitud (JSON):**
```json
{
    "title": "Nombre del Álbum",
    "year": "Año de lanzamiento",
    "author": "Nombre del artista o banda"
}
```

**Ejemplo en Postman**:

Selecciona el método POST.
Introduce la URL: http://localhost:tu-local-host/musicDb.
En la pestaña "Body", selecciona "raw" y "JSON".
Introduce el JSON con los datos del álbum.
Haz clic en "Send".

Si la petición es procesada correctamente, se mostrará un mensaje de "album creado" y los nuevos datos introducidos en la base de datos.

**El ID se genera automáticamente

![albumcreated](https://github.com/Adalab/modulo-4-evaluacion-final-bpw-elena-alcaraz/assets/156465486/44312d03-0a53-4414-a06c-3027e05d9208)


### 2. Obtener un listado de todos los álbumes 📜

**Endpoint**: `GET /musicDb`

**Descripción**: Obtener una lista de todos los álbumes almacenados en la base de datos.

**Ejemplo en Postman**:

Selecciona el método GET.
Introduce la URL: http://localhost:tu-local-host/musicDb.
Haz clic en "Send".

Si la respuesta es exitosa, se mostrarán los álbumes de la base de datos. 

![getallalbums](https://github.com/Adalab/modulo-4-evaluacion-final-bpw-elena-alcaraz/assets/156465486/8ac89e37-ca4b-4456-aeec-601fe1d94a31)


### 3. Listar un álbum por artista o nombre de la banda 🔍

**Endpoint**: `GET /musicDb/:author`

**Descripción**: Encuentra los álbumes específicos basados en el nombre del artista o nombre de la banda.

**Parámetro de la ruta**:
author: Nombre del artista/banda del álbum.

**Ejemplo en Postman**:

Selecciona el método GET.
Introduce la URL: http://localhost:tu-local-host/musicDb/NombreDelArtista **En los artistas cuyo nombre tienen espacio, no es necesario poner guión, se ponen con espacio.
Haz clic en "Send".

Si la respuesta es existosa y existen álbumes en la base de datos de ese artista o banda, se mostrarán abajo. 

![getalbumbyauthor](https://github.com/Adalab/modulo-4-evaluacion-final-bpw-elena-alcaraz/assets/156465486/fdf3d6df-c9a7-41ef-95aa-9ba58e5d7271)


### 4. Actualizar un álbum existente 🔄

**Endpoint**: `PUT /musicDb/:id`

**Descripción**: Actualiza la información de un álbum existente en la base de datos.

**Parámetro de la ruta**:
id: ID del álbum que se desea actualizar.

**Body de la solicitud (JSON):**
```json
{
    "title": "nuevo titulo",
    "year": "nuevo año",
    "author": "nuevo author"
}
```

**Ejemplo en Postman**:

Selecciona el método PUT.
Introduce la URL: http://tu-api-url.com/albums/musicDb/idDelAlbum.
En la pestaña "Body", selecciona "raw" y "JSON".
Introduce el JSON con los datos actualizados del álbum.
Haz clic en "Send".

Si la petición se realiza con éxito, aparecerá un mensaje de confirmación. 

![albumupdated](https://github.com/Adalab/modulo-4-evaluacion-final-bpw-elena-alcaraz/assets/156465486/cec96d2f-0a14-4eae-817b-cc6d5e7e6133)


### 5. Borrar un álbum ❌

**Endpoint**: `DELETE /music/:id`

**Descripción**: Elimina un álbum de la base de datos.

**Parámetro de la ruta**:
id: ID del álbum que se desea eliminar.

**Ejemplo en Postman**:

Selecciona el método DELETE.
Introduce la URL: http://tu-api-url.com/albums/musicDb/idDelAlbum.
Haz clic en "Send".

Si la petición se realiza con éxito, aparecerá un mensaje de confirmación. 

![albumdelete](https://github.com/Adalab/modulo-4-evaluacion-final-bpw-elena-alcaraz/assets/156465486/d50ac528-8786-4bf7-9f74-51158f5b945a)


## 🛠️ Herramientas Necesarias
Postman para probar los endpoints

## 📋 Notas Adicionales
Asegúrate de que el servidor esté corriendo antes de hacer las solicitudes.
La base de datos se actualiza automáticamente con cada inserción, actualización y eliminación.
Los IDs de los álbumes son auto-incrementados, no es necesario proporcionarlos.

¡Gracias por revisar mi proyecto! Espero que disfrutes explorando mi API tanto como yo disfruté construyéndola. 🎉

