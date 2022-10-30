"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book1_1 = require("./book1");
var claseLibrary_1 = require("./claseLibrary");
var libro1 = new book1_1.Book1("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
console.log(libro1.getAuthor());
var libro2 = new book1_1.Book1("EL señor de los Anillos", 801, "56264433-MS23223", "Tolkien", "Anagrama");
console.log(libro2);
var libro3 = new book1_1.Book1("Los pilares de la Tierra", 602, "982433-CR773", "Ken Follet", "Gran Editorial");
console.log(libro3);
var libro4 = new book1_1.Book1("Contra todo florecen los Almendros", 75, "9788439738282", "Maria Gripe", "Textos y más");
console.log(libro4);
var biblioteca = new claseLibrary_1.Library([], "Biblioteca Nacional", "ALonso Fernandez");
console.log(biblioteca);
console.log(biblioteca.getNumberOfBooks());
console.log(biblioteca.findByAuthor("Tolkien"));
