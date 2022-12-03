/*
    ===== Código de TypeScript =====
*/

//ENCADENAMIENTO OPCIONAL

interface Pasajero {
    nombre: string;
    hijos?: string[];//Opcional hijos
}

const pasajero1: Pasajero = {
    nombre:"Fernando"
};
const pasajero2: Pasajero = {
    nombre:"Melissa",
    hijos:["Pepe","Natalia"]
}

function imprimeHijos(pasajero: Pasajero):void{
    //Si no pusieramos interrogacion ? al no estar definida una variable al acceder a ella fallaria
    //De esta forma evitamos que no reviente
    const cuantoHijos = pasajero.hijos?.length || 0; //Si tiene hijos obtiene longitud sino 0, usando ||
    console.log(cuantoHijos);
}
//El encadenamiento opcional o tambien llamado optional chaining
//es muy importante porque evalua si se da algo, evitando con su uso que no reviente nada

imprimeHijos(pasajero1);