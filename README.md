# Proyecto Biblioteca de Libros

Este proyecto implementa una biblioteca de libros utilizando JavaScript. Permite la creación de objetos Libro, la adición de nuevos libros a la biblioteca, y la búsqueda de libros por autor.

## Contenido

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Código](#estructura-del-código)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Instalación

No se requiere ninguna instalación especial para ejecutar este código. Solo necesitas un entorno que pueda ejecutar JavaScript, como un navegador web o Node.js.

## Uso

Para utilizar este proyecto, copia el código en un archivo con extensión `.js` y ejecútalo en tu entorno de JavaScript preferido.

## Estructura del Código

### Definición del Objeto `Libro`

El objeto `Libro` se define mediante una función constructora que toma como parámetros el título, el autor, el año de publicación y el género del libro. Cada libro tiene un método `info` que devuelve una cadena con la información del libro.

### Creación de la Biblioteca

La biblioteca es un arreglo que inicialmente contiene tres libros, cada uno creado utilizando la función constructora `Libro`.

### Funciones

#### `buscarLibrosPorAutor`

Esta función permite buscar libros en la biblioteca por el nombre del autor. Devuelve un arreglo de libros que coinciden con el autor proporcionado.

#### `añadirLibro`

Esta función permite añadir un nuevo libro a la biblioteca proporcionando el título, el autor, el año de publicación y el género del libro.

### Pruebas

Se añade un nuevo libro a la biblioteca y se imprime la información del último libro añadido para verificar que la adición se realizó correctamente.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, realiza un fork del repositorio, crea una rama con tus cambios y envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Ve el archivo `LICENSE` para más detalles.

---

Este archivo README proporciona una descripción general del proyecto, cómo usarlo y una breve explicación de la estructura del código.
