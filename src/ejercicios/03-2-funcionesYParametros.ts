/*
    ===== Código de TypeScript =====
*/

    //Si una funcion no retorna nada se le puede poner en el tipo--> :void, :undefined etc..
    //Como siempre tenemos que indicar en una funcion los tipos como consejo y no usar any
    //Para ello usaremos una interfaz

    interface PersonaujeLOR{//Se asegura que el objeto cumpla con las propiedades marcada en la interfaz
        nombre: string;
        pv: number;
        //Podemos crear dentro de una interfaz propiedades como funciones . Usando flecha es la opcion corta
        //Tenemos que indicar lo que devuelve
        //Podemos decir ademas todos los tipos de parametros que podra recibir
            //mostrarHp: (a:number,b:number,c:number) => void;
        mostrarHp: () => void;
    }

    function curar(personaje: PersonaujeLOR, curarX: number):void{
        personaje.pv += curarX;
        console.log(personaje);
    }

    const nuevoPersonaje: PersonaujeLOR = {
        nombre: "Strider",
        pv: 50,
        mostrarHp(){
            console.log('Puntos de vida:', this.pv);
        }
    }

    curar(nuevoPersonaje, 50);
    nuevoPersonaje.mostrarHp();
