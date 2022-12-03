/*
    ===== Código de TypeScript =====
*/

//CREANDO UN ARREGLO
    //Tipo :any indica que puedes meter cualquier cosa.
    //Tenemos que intentar usar tipos mas estrictos
    let habilidades = [];
    //Indicando el tipo de forma estricta(la mejor forma)
        //let nombreVariable : tipoArray [] = [valores]
        let habilidadesDos : boolean[] = [true];
        //Tambien podemos crear un array de varios tipos, usando parantesis y tuberias
        let habilidadesTres : (boolean | string | number)[] = [true];

//CREANDO TUPLES O TUPLAS
    //Es crear un arreglo y decirle en orden de que tipo sera su contenido
    let habilidadesCuatro: [string,number] = ["",5];

//CREANDO UNA INTERFAZ
    //Una interfaz permite crear objetos y sus propiedades con sus tipos como nosotros queramos por defecto
    interface Personaje {
        nombre: string;
        hp: number;
        habilidades: string[];
        puebloNatal?: string; //Si escribimos ? significa que la propiedad es opcional
    }

//CREANDO UN OBJETO QUE INSTANCIA UNA INTERFAZ
    //Podriamos crear objetos que sean de tipo interfaz y ya asignar valores
        const personaje: Personaje = {
            nombre: 'Strider',
            hp:100,
            habilidades: ['Bash']
        }
    //Al haber creado un objeto de tipo interfaz podemos crear en la interfaz nuevas propiedades
    //y despues poder insertarlas directamente por ejemplo -->pueblo natal
    personaje.puebloNatal = 'Pueblo Paleta';

//TAMBIEN PODEMOS INDICAR UN OBJETO QUE TIPOS DE DATOS TENDRAN Y METODOS:
    const personajeD: {nombre: string, hp:number, habilidades: string[], getNombre: Function} = {
        nombre: 'Strider',
        hp:100,
        habilidades: ['Bash'],
        getNombre():void{
            console.table("Tipo funcion")
        }
    }

    console.table(personaje);
