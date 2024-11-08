const productos = ["Refrigerador", "Microondas", "Lavadora", "Aspiradora", "Plancha", "Cafetera"];

console.log("Primer producto:", productos[0]);
console.log("Tercer producto:", productos[2]);

console.log("Último producto:", productos[productos.length - 1]);

let producto_extraido = productos.shift();  
productos.push(producto_extraido);  
console.log("Array después de mover el primer producto al final:", productos);

productos.push("Secador de pelo");
productos.push("Batidora");
console.log("Array después de agregar nuevos productos:", productos);

let cantidad_elementos = productos.length;
console.log("Cantidad de productos en el array:", cantidad_elementos);

let producto_buscar = "Microondas";
if (productos.includes(producto_buscar)) {
  console.log("Producto encontrado:", producto_buscar);
} else {
  console.log("El producto buscado no existe:", producto_buscar);
}

let cadena_productos = productos.join(" ");
console.log("Cadena de productos:", cadena_productos);

let cantidad_caracteres = cadena_productos.length;
console.log("Cantidad de caracteres en la cadena de texto:", cantidad_caracteres);

let cadena_productos_modificada = cadena_productos.replace("Microondas", "Horno eléctrico");
console.log("Cadena modificada:", cadena_productos_modificada);

let nuevo_array = cadena_productos_modificada.split(" ");
console.log("Nuevo array generado:", nuevo_array);