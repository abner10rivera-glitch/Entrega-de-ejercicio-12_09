import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===== MENÚ DE CAFETERÍA =====");
console.log("1. Café              $1.50");
console.log("2. Chocolate         $2.00");
console.log("3. Té                $1.25");
console.log("4. Jugo natural      $2.50");

rl.question("Ingrese el nombre del cliente: ", (nombre) => {

    rl.question("Seleccione una opción de bebida: ", (opcion) => {

        rl.question("Ingrese la cantidad de bebidas: ", (cantidad) => {

            let producto;
            let precio;

            opcion = Number(opcion);
            cantidad = Number(cantidad);

            switch (opcion) {
                case 1:
                    producto = "Café";
                    precio = 1.50;
                    break;

                case 2:
                    producto = "Chocolate";
                    precio = 2.00;
                    break;

                case 3:
                    producto = "Té";
                    precio = 1.25;
                    break;

                case 4:
                    producto = "Jugo natural";
                    precio = 2.50;
                    break;

                default:
                    console.log("Opción de bebida no válida.");

            }

            const total = precio * cantidad;

            console.log("\n===== RESUMEN DE COMPRA =====");
            console.log("Cliente: " + nombre);
            console.log("Producto: " + producto);
            console.log("Cantidad: " + cantidad);
            console.log("Total a pagar: $" + total.toFixed(2));

            rl.close();
        });
    });
});
`
`