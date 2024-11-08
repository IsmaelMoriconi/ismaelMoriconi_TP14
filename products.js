productos = ["Refrigerador", "Microondas", "Lavadora", "Aspiradora", "Plancha", "Cafetera"]

print("Primer producto:", productos[0])  
print("Tercer producto:", productos[2])  
print("Último producto:", productos[-1]) 

producto_extraido = productos.pop(0)
productos.append(producto_extraido)
print("Array después de mover el primer producto al final:", productos)

productos.append("Secador de pelo")
productos.append("Batidora")
print("Array después de agregar nuevos productos:", productos)

cantidad_elementos = len(productos)
print("Cantidad de productos en el array:", cantidad_elementos)

producto_buscar = "Microondas"
    print("Producto encontrado:", producto_buscar)

    print("El producto buscado no existe:", producto_buscar)

cadena_productos = " ".join(productos)
print("Cadena de productos:", cadena_productos)

cantidad_caracteres = len(cadena_productos)
print("Cantidad de caracteres en la cadena de texto:", cantidad_caracteres)

cadena_productos_modificada = cadena_productos.replace("Microondas", "Horno eléctrico")
print("Cadena modificada:", cadena_productos_modificada)

nuevo_array = cadena_productos_modificada.split(" ")
print("Nuevo array generado:", nuevo_array)