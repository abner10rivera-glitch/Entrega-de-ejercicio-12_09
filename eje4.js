import readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Ingrese el nombre del empleado: ", (nombre) => {
    rl.question("Ingrese la cantidad de horas trabajadas: ", (horas) => {
        console.log("\n===== TURNOS DE TRABAJO =====");
        console.log("1. Turno matutino $4.50 por hora");
        console.log("2. Turno vespertino $5.25 por hora");
        console.log("3. Turno nocturno $6.00 por hora");
        rl.question("Seleccione el turno: ", (opcion) => {
            let turno;
            let pagoHora;
            horas = Number(horas);
            opcion = Number(opcion);
            switch (opcion) {
                case 1:
                    turno = "Turno matutino";
                    pagoHora = 4.50;
                    break;
                case 2:
                    turno = "Turno vespertino";
                    pagoHora = 5.25;
                    break;
                case 3:
                    turno = "Turno nocturno";
                    pagoHora = 6.00;
                    break;
                default:

                    console.log("Turno no válido.");

            }
            const salarioTotal = pagoHora * horas;
            console.log("\n===== RESUMEN DEL SALARIO =====");
            console.log("Empleado: " + nombre);
            console.log("Turno seleccionado: " + turno);
            console.log("Horas trabajadas: " + horas);
            console.log("Pago por hora: $" + pagoHora.toFixed(2));
            console.log("Salario total: $" + salarioTotal.toFixed(2));
            rl.close();
        });
    });
});