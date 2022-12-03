//import axios from 'axios';

//COMO REALIZAR UNA LLAMADA HTTP Y MANIPULAR LA INFORMACION
//-----------------------------------------------------------------

//EL ASYNSC transforma la funcion para que devuelva una promesa
    //Podemos indicar tambien que devolvemos como promesa
    const getPokemon = async( pokemonId: number): Promise<string> => {
        //Como esto es una promesa, dentro de una funcion asincrona podemos suar:
        //la plabara reservada await, que lo que hace es hasta que no recibamos respuesta
        //la promesa no se va a devolver(se quedara esperando)(esto solucina la asincroneidad)
        
        /* LO COMENTO POR QUE AUNQUE FUNCIONA DA FALLO EL PAQUETE IMPORTADO

        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`)
        console.log(resp.data.name);

        */

        return "yes";

        
    }

getPokemon(5)
    .then( resp => console.log(resp))
    .catch( error => console.log(error))
    .finally( ()  => console.log("Fin de get Pokemon"))//Aunque falle, siempre se ejecutara