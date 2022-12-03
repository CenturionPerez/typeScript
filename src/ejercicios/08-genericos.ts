/*
    ===== Código de TypeScript =====
*/

//CONCEPTO DE LOS GENERICOS

    //Mediante el uso generico
    //Podemos decirle a la funcion que puede recibir cualquier tipo de informacion
    //Es decir, conseguir que mute por si alomejor en una respuesta del back viene otro tipo de dato
        //Para ello usamos detras del nombre ejemplo queTipoSoy<letra que queramos>(argumento: letra){}
            function queTipoSoy<T>(argumento: T){
                return argumento;
            }
    
    //Al ser de tipo T oletra que queramos poner podremos mandar a la función cualquier tipo de informacion
    //El tipo no esta definido
        let soyString = queTipoSoy("Hola Mundo");
        let soyNumero = queTipoSoy(100);
        let soyArreglo = queTipoSoy([1,2,3,4,5]);

    //Si queremos recibir de uan funcion generica un tipo concreto de dato
    //Podemos indicarlo asi:
        let soyExplicito = queTipoSoy<number>(100);

    //Tambien podemos recibir algo generico y devolver string
        function queTipoSoyString<T>(argumento: T):string{
            return (argumento).toString();//Esto puede fallar porque lo que le pasemos no tenga el metodo toString()
        }


