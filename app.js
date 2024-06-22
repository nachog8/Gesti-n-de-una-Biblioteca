// Definición del objeto Libro
function Libro(titulo, autor, añoPublicacion, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.añoPublicacion = añoPublicacion;
    this.genero = genero;
    this.info = function() {
        return `${this.titulo} escrito por ${this.autor} en el año ${this.añoPublicacion}, género ${this.genero}.`;
    };
}

// Creación del arreglo biblioteca con tres libros
let biblioteca = [
    new Libro("Spider-Man: Blue", "Jeph Loeb", 2002, "Cómic"),
    new Libro("Batman: Year One", "Frank Miller", 1987, "Cómic"),
    new Libro("Superman: Red Son", "Mark Millar", 2003, "Cómic")
];

// Función para buscar libros por autor
let buscarLibrosPorAutor = (autor) => {
    return biblioteca.filter(libro => libro.autor === autor);
}

// Función para añadir un libro al arreglo biblioteca
let añadirLibro = (titulo, autor, añoPublicacion, genero) => {
    biblioteca.push(new Libro(titulo, autor, añoPublicacion, genero));
}

// Pruebas
añadirLibro("Fahrenheit 451", "Ray Bradbury", 1953, "Ciencia ficción");
//Aqui imprimo el ultimo libro de la biblioteca
console.log(biblioteca[biblioteca.length - 1].info());