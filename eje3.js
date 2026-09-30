import readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Ingrese el nombre del cliente: ", (nombre) => {
    rl.question("Ingrese la cantidad de entradas: ", (cantidad) => {
        console.log("\n===== TIPOS DE ENTRADA =====");
        console.log("1. Entrada general $6.00");
        console.log("2. Entrada preferencial $10.00");
        console.log("3. Entrada VIP $15.00");
        rl.question("Seleccione el tipo de entrada: ", (opcion) => {
            let tipoEntrada;
            let precioUnitario;
            cantidad = Number(cantidad);
            opcion = Number(opcion);
            switch (opcion) {
                case 1:
                    tipoEntrada = "Entrada general";
                    precioUnitario = 6.00;
                    break;
                case 2:
                    tipoEntrada = "Entrada preferencial";
                    precioUnitario = 10.00;
                    break;
                case 3:
                    tipoEntrada = "Entrada VIP";
                    precioUnitario = 15.00;
                    break;
                default:

                    console.log("Tipo de entrada no válido.");

            }
            const total = precioUnitario * cantidad;

            console.log("\n===== RESUMEN DE COMPRA =====");
            console.log("Cliente: " + nombre.toUpperCase());
            console.log("Tipo de entrada: " + tipoEntrada);
            console.log("Cantidad: " + cantidad);
            console.log("Precio unitario: $" + precioUnitario.toFixed(2));
            console.log("Total a pagar: $" + total.toFixed(2));
            rl.close();
        });
    });
});