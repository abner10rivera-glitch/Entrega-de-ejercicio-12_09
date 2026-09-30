import readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Ingrese el nombre del pasajero: ", (nombre) => {
    rl.question("Ingrese la cantidad de boletos: ", (cantidad) => {
        console.log("\n===== DESTINOS =====");
        console.log("1. San Salvador $5.50");
        console.log("2. Santa Ana $8.00");
        console.log("3. La Unión $4.25");
        console.log("4. Usulután $3.50");
        rl.question("Seleccione el destino: ", (opcion) => {
            let destino;
            let precio;
            cantidad = Number(cantidad);
            opcion = Number(opcion);
            switch (opcion) {
                case 1:
                    destino = "San Salvador";
                    precio = 5.50;
                    break;
                case 2:
                    destino = "Santa Ana";
                    precio = 8.00;
                    break;
                case 3:
                    destino = "La Unión";
                    precio = 4.25;
                    break;
                case 4:
                    destino = "Usulután";
                    precio = 3.50;
                    break;
                default:

                    console.log("Destino no válido.");

            }
            const total = precio * cantidad;
            console.log("\n===== RESUMEN DE COMPRA =====");
            console.log("Pasajero: " + nombre);
            console.log("Destino: " + destino);
            console.log("Cantidad de boletos: " + cantidad);
            console.log("Total a pagar: $" + total.toFixed(2));
            rl.close();
        });
    });
});