/*
    ===== Código de TypeScript =====
*/

//TAREA SOBRE OBJETOS E INTERFACES
    //Si queremos crear objetos dentro de objetos
        //Lo comun y lo que se aconseja es crear interfaces para cada uno de ellos
        //y despues ir indicandolas en los tipo de cada valor de la propiedad
interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion: Direccion; //Objeto que es en si otra interfaz con sus respectivos campos
    mostrarDireccion: () => string;
}

interface Direccion{
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad:30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);

