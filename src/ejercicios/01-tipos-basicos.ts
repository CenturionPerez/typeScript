/*
    ===== Código de TypeScript =====
*/

//Si nos ponemos encima del nombre de la variable despues de los dos puntos indica el tipo de variable

//TIPO STRING
    let nombre = 'Strider';
    //Otra forma de decir que es de un tipo concreto
    let nombreDos: string = "Strider";
    //Una cosntante nunca va a cambiar de valor
    const constante = "Strider";

//TIPO NUMERICO
    let hp: number = 95;

//TIPO BOOLEAN
    let estavivo: boolean = false;

//TIPO TYPE
    //Es como una interfaz pero tiene ciertas diferencias
    //Véase:
        //https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types
        //https://stackoverflow.com/questions/36782896/in-typescript-what-is-the-difference-between-type-and-interface
        type Hero = {
            numero: number,
            cadena: string
        }
        
//Si queremos que una misma variable pueda tener dos posibles tipos de valores
    // La tuberia significa o | es decir un tipo u otro
        let hpDos: number | string = 95;
        hpDos = 'Full'
    

console.log(nombre, hp);

