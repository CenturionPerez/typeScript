/*
    ===== Código de TypeScript =====
*/



//IMPORTACIONES Y EXPORTACIONES
//Para que nosotros podamos importar algo de otro lugar ejemplo una interfaz
    //Necesitamos que esa interfaz donde este definida le pongamos delante export Interface Producto
    //Despues importemos la interfaz o aquello exportado al elemento
        //Mediante el control y click encima o dandole a la bombilla(lo hace de forma automatica pero puede no ocurrir)
            import { calculaISVArreglos, Producto } from "./05-3-desestructuracion-argumentos";

            const carritoCompras: Producto[] = [
                {
                    desc:'Telefono 1',
                    precio:100
                },
                {
                    desc:'Telefono 2',
                    precio:150
                }];

            //Al haberla exportado la funcion calculaISVArreglos
            //Cuando hagamos el contro, y pulsar, encontrara la funcion exportada en otro elemento
            //La importara para que podamos llamarla
            //IMPORTANTE CUANDO IMPORTAMOS ALGO SE EJECUTA TODO EL FICHERO DE LO QUE EXPORTARMOS
                //EXCEPTO INTERFACES
            const [total, isv] = calculaISVArreglos(carritoCompras);
            console.log('Total', total);
            console.log('ISV', isv);
