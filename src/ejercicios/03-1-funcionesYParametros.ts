/*
    ===== Código de TypeScript =====
*/

//CREANDO UNA FUNCION
    //Podemos indicar de forma estricta que debe recibir la funcion como argumentos
    //Tambien podemos indicar detras de los parentesis lo que va a devolver la funcion con :tipado
    function sumar(a: number, b:number):number{
        return (a + b);
    }

//Podemos crear funcion de flechas y tambien indicar el tipo de parametro que recibira
//Tambien podemos indicar que devolvera tipo number como venimos haciendo
    const sumarFlecha = (a:number, b:number) :number => {
        return a+b;
    }

//OTRA FUNCION
     //Los obligatorios se ponen en amarillo
     //Los mas apagados son opcionales porque no se utilizan o su utilizacion no es obligatoria
     //Podemos crear como parametros argumentos opcionales con ?: number
        //Lo que vaya despues de un opcional debe estar definido sino fallaria o ser opcional
        //Aunque un parametro sea definido se le puede enviar valor igualmente
        //En resumen, organizamos de mas importante a menos
    function multiplicar(numero: number, otroNumero?:number, base: number = 2){
        return numero*base;
    }

//PARAMETROS REST
    //Los parametros rest se utilizan cuando queremos informar una gran multitud de valores
    //de un solo tipo ejemplo string y sin tener que ir poniendo cada uno
        //Para ello, tenemos que usar restArguments
        //Ponemos tres puntos seguidos, nombre variable y el tipo-->
        //...restArgs: string[]
            //Si tenemos que usar disitntos tipo para un parametro podemos usar any
    function restArguments(a: number, b:number, ...restArgs: string[]):number{
        return (a + b);
    }

const resultado : number = multiplicar(5, 0 , 10);
console.log(resultado);
