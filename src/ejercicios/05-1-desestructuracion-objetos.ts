/*
    ===== Código de TypeScript =====
*/
//DESESTRUCTURACION DE OBJETOS

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    year: number;
}

const reproductor : Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mess",
    detalles: {
        autor: "Ed Sheeran",
        year: 2015
    }
}
console.log('El volumen actual: ', reproductor.volumen);
console.log('El segundo actual: ', reproductor.segundo);
console.log('La cancion actual: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor);

//Para no tener que repetir algo reiteradas veces se hace uso de lo que se conoce como Desestructuracion
//Toma el objeto reproductor y me interesan las propiedades que esten dentro de { }, ademas como constantes
    const {volumen, segundo } = reproductor;
    //Esto permitira no tener que usar reiteradamente el objeto padre y contemos con variables constantes que infirieron sobre el objeto
        console.log('El volumen actual: ', volumen);
        console.log('El segundo actual: ', segundo);

    //Maneras de desestructurar un objeto dentro de otro
    /*1-Opcion menos aconsejable
        const {detalles:{ autor, year}} = reproductor;
            console.log('El autor es: ', autor);
            console.log('El año es: ', year);*/
            
    //1-Opcion mas aconsejable
        const {autor, year} = reproductor.detalles;
            console.log('El autor es: ', autor);
            console.log('El año es: ', year);

    /*1.1-Misma opcion de otra forma, ganas la variable detalles pero escribes mas
        const {detalles} = reproductor;
        const {auto year} = detalles;
            console.log('El autor es: ', autor);
            console.log('El año es: ', year);*/

//Si queremos crear otra variable que haga uso de los campos del objeto
    //Asi evitar poner el mismo nombre variable y que de error:
    //Conseguimos crear nuevas variables que tengo esos datos. No suele darse
    const {autor: autoDetalle, year: yearDetalle} = reproductor.detalles;
