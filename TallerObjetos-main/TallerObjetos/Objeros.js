// ------------**ejercicio 1 **--------------

// const vegetales = {
//     v1: "Tomate",
//     v2: "Cebolla",
//     v3: "Ajo"
// };


// const valores = Object.values(vegetales);


// document.write("<h2>Valores de los vegetales:</h2>");
// document.write("<ul>");
// valores.forEach(valor => {
//     document.write(<li>${valor}</li>);
// });
// document.write("</ul>");

//------------**Ejercicio 2**------------

//  const vegetales = {
//     v1: "Tomate",
//     v2: "Cebolla",
//     v3: "Ajo"
// };


// const claves = Object.keys(vegetales);

// // Mostrar las claves en el navegador
// document.write("<h2>Claves de los vegetales:</h2>");
// document.write("<ul>");
// claves.forEach(clave => {
//     document.write(<li>${clave}</li>);
// });
// document.write("</ul>"); 



//--------------* Ejercicio 3 **-------------

/* const vegetales = {
    v1: "Tomate",
    v2: "Cebolla",
    v3: "Ajo"
};

// Mostrar las claves y los valores en el navegador
document.write("<h2>Llaves y valores de los vegetales:</h2>");
document.write("<ul>");
for (const clave in vegetales) {
    if (vegetales.hasOwnProperty(clave)) {
        document.write(<li><strong>${clave}:</strong> ${vegetales[clave]}</li>);
    }
}
document.write("</ul>"); */

// // --------------Ejercicio 4 **----------------


// const vegetales = {
//     v1: "Tomate",
//     v2: "Cebolla",
//     v3: "Ajo"
// };


// vegetales.v4 = "Lechuga";
// vegetales.v5 = "Zanahoria";

// const valores = Object.values(vegetales);


// document.write("<h2>Valores de los vegetales:</h2>");
// document.write("<ul>");
// valores.forEach(valor => {
//     document.write(<li>${valor}</li>);
// });
// document.write("</ul>"); 

//------------Ejercicio 5 -----------------

//  const productos = [
//     { nombre: "Manzanas", precio: 2.5, cantidad: 10 },
//     { nombre: "Plátanos", precio: 1.8, cantidad: 15 },
//     { nombre: "Naranjas", precio: 3.0, cantidad: 8 }
// ];

// // Mostrar los datos de los productos en el navegador
// document.write("<h2>Datos de los productos:</h2>");
// document.write("<ul>");
// productos.forEach(producto => {
//     document.write(<li>Nombre: ${producto.nombre}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}</li>);
// });
// document.write("</ul>"); 

//-------------Ejercicio 6 -----------------

//  const productos = [
//     { nombre: "Manzanas", precio: 2.5, cantidad: 10 },
//     { nombre: "Plátanos", precio: 1.8, cantidad: 15 },
//     { nombre: "Naranjas", precio: 3.0, cantidad: 8 }
// ];

// // Mostrar los datos de los productos en el navegador
// document.write("<h2>Datos de los productos:</h2>");
// document.write("<ul>");
// productos.forEach(producto => {
//     document.write(<li>Nombre: ${producto.nombre}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}</li>);
// });
// document.write("</ul>"); 

//----------Ejercicio 7-----------------

//  const productos = [
//     { producto: "Manzanas", precio: 2.5, cantidad: 10 },
//     { producto: "Plátanos", precio: 1.8, cantidad: 15 }
// ];

// // Calcular el subtotal a pagar
// let subtotal = 0;
// productos.forEach(producto => {
//     subtotal += producto.precio * producto.cantidad;
// });

// const iva = 0.16; // 16% de IVA
// const totalConIva = subtotal * (1 + iva);

// document.write("<h2>Datos de los productos:</h2>");
// document.write("<ul>");
// productos.forEach(producto => {
//     document.write(<li>Producto: ${producto.producto}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}</li>);
// });
// document.write("</ul>");

// document.write(<p>Subtotal a pagar: $${subtotal.toFixed(2)}</p>);
// document.write(<p>Total de la compra con IVA aumentado: $${totalConIva.toFixed(2)}</p>); 