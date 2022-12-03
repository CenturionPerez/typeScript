(() =>{

    //LA CLASE ABSTRACTA NO PODEMOS INSTANCIARLA
        //Sirven para crear otras clases que extiendan de esta y le den funcionalidades
        //Como si fuese una clase que tiene lo que coinciden todas y despues
        //cada clase añade sus implementaciones sobre lo generico o lo que extienden por defecto
        abstract class Mutante {
            constructor(
                public name: string,
                public realName: string
            ){}    
        }
        //Sino ponemos constructor usaran por defecto el de la clase que extienden 
        class Xmen extends Mutante{};
        class Villian extends Mutante{}

        const wolverine = new Xmen('Wolverine', 'Logan');
        //const wolverine: Mutante;
        console.log(wolverine);

        const printName = (chracter: Mutante) =>{
            console.log(chracter.realName);
        }
        //Podemos enviar como tipo Mutantes, objetos de tipos que extiendan de la abstracta mutante
        printName(wolverine);
})()