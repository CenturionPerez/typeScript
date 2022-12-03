/*
    ===== Código de TypeScript =====
*/

//CLASES BASICAS
    //De la siguiente manera creamos una clase
    //Podemos indicar sus atributos como publicos, privados, estaticos y protegidos...
        class Heroe{
            private alterEgo: string; //Private significa que sera visible dentro de esta clase
            public edad: number; //Public siginifica que esta variable alguien podra ver la fuera de esta clase
            static nombreReal: number; //Static significa que podremos usarla fuera sin tener que instanciar la clase para usarla
            //(es decir, podremos llamarla diciendo unicamente Heroe.nombreReal. No hemos creado un objeto nuevo tipo Heroe)
            // idioma: string; Si nosotros no indicamos nada en la propiedad se convierte en publica
        
            //CREANDO CONSTRUCTOR
            //El constructor es una funcion que se va a llamar cuando hacemos una instancia de la clase
            constructor(alterEgo: string){
                //Para almecenar el valor a una propiedad de la clasel, le llamamos con this.
                this.alterEgo = alterEgo;
            }
        }

    //Si nosotros tenemos una clase con muchos valores
    //Si no queremos ir haciendo el this con cada propiedad y no poner el nombre de cada propiedad todo el rato
    //podemos usar lo siguiente:
        class HeroeV2{
            //Esto siguiente lo que hara es: créate una propiedad "alterEgo" o x
            //tipo string o x tipo y publica o lo que sea y el dato que reciba en ese orden se lo insertas
            constructor(
                public alterEgo: string,
                public edad?: number,
                public nombreReal?: string
            ){}
        }

    //Las diferencias entra las clases y las interfaces:
    //las interfaces no existen en javascript, no pueden implementar metodos solo definir los tipos
    //Las clases se pueden instanciar y lo mas importante pueden definir e implementar metodos etc...

    const spiderman = new Heroe('Spiderman');
    const ironman = new HeroeV2('Ironman',45,'Tony');
    console.log(spiderman);
    console.log(ironman);

    //EXTENDIENDO DE OTRA CLASE
    class PersonaNormal {
        constructor(
            public nombre:string,
            public direccion:string
        ){}
        protected getFullName(){
            return console.log(nombre);
        }
    }
    //Para poder extender una clase usamos la palabra reservada "extends" y detras la clase de donde extenderemos
    class HeroeV3 extends PersonaNormal{
        //Para que no falle el extends, tenemos que llamar al constructor de la clase padre llamado super();
        constructor(
            public alterEgo: string,
            public edad: number,
            //Podemos no crear la variable y solo usarla como parametro para la clase padre
            nombreReal: string 
        ){
            //Llamamos al constructor padre
            //le mandamos los parametros que el constructor padre espera para poder ser usado y no falle
            //podemos asignar valores directamente al ser parametros
            super( nombreReal, 'New York USA' );
        }
        //LLAMANDO AL METODO DE UNA CLASE QUE EXTENDEMOS
        getFullanamePersonaNormal(){
            //Para llamar al metodo de una clase que extendemos
                //tenemos que usar el super constructor
                //tiene que estar el metodo o funcion protegida o publica
                //sino no podriamos acceder
            super.getFullName();
        }
    }
    const hulk= new HeroeV3('Hulk',45,'Tony');

    //Si queremos llamar al metodo getFullName, podriamos acceder a ella si:
    //Esta publico o protegio(si extiende de esa clase donde se utiliza)
    //Si esta privada solo se podria usar dentro de esa clase donde exista
        hulk.getFullanamePersonaNormal();
        console.log(hulk);


