/*
    ===== Código de TypeScript =====
*/

//DECORADORES DE CLASES

    //Se usan en typeScript, en javascript no existen
    //Trataremos unos pocos pero hay muchos, en el siguiente enlace están el resto:
        //https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators

    function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            newProperty = "new property";
            hello = "override";
        };
    }

    //IMPORTANTE
        //Un decordador no es mas que una funcion que expande a la clase donde se le ponga funcionalidades especiales
        //Para utilizarlo seria poner @nombreDeLaFuncion
        //Si queremos que no de fallo al usar el decordador tenemos que hacer los siguientes pasos:
            //1 - Ir a tsconfig.json
            //2 - Descomentar experimentalDecorators y debe estar a true
                //Esto indicara a typeScript que ya podemos usar decoradores

    @classDecorator
    class MiSuperClase{
        public miPropiedad: string = 'ABC123';

        imprimir(){
            console.log('Hola Mundo');
        }
    }

    console.log(MiSuperClase);
    //Nosotros independientemente de eso, podemos seguir trabajando con nuestra clase igual
    const miClase = new MiSuperClase();
    console.log(miClase.miPropiedad);


