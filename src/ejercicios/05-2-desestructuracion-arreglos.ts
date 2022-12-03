/*
    ===== Código de TypeScript =====
*/

//DESESTRUCTURACION DE ARREGLOS

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];

console.log(dbz[0]);
console.log(dbz[1]);
console.log(dbz[2]);

//Para no repetir el arreglo hacemos uso de la desestructuracion
    //En arreglos no se usan corchetes {} sino -> [] cajas
    //Indicando entre la caja la variable a crear seguido de coma por tantos datos queramos sacar
        const [ p1, p2, p3 ]= dbz;
        console.log(p1);
        console.log(p2);
        console.log(p3);
    //Si solo nos interesa una posicion x del arreglo
        const [ , p4,  ]= dbz;
        console.log(p4);
    //IMPORTANTE ->Desestructurar array como si fuera un objeto(es muy util para no poner comas a lo loco)
        //Indicando entre corchetes la posicion : variable a crear
        const { 2: p5 }= dbz;
        console.log(p5);
    //Si tuvieramos un arreglo dentro de otro arreglo
        //Aplicariamos dos desestructuraciones como consejo
        const dbz2: string[] = ["Goku", "Vegeta", "Trunks"];
