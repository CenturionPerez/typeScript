/*
    ===== Código de TypeScript =====
*/

//DESESTRUCTURACION DE ARGUMENTOS EN UNA FUNCION

export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: "Nokia A1",
    precio: 150
}

const tableta: Producto = {
    desc: "Ipad Air",
    precio: 350
}

function calculaISV( productos: Producto[]):number{
    let total = 0;
    //MANERA POCO UTIL de obtener los precios de cada producto
    /*productos.forEach((producto) =>{
        total += producto.precio;
    })
    return total * 0.15;*/

    //MANERA UTIL APLICANDO DESESTRUCTURACION DE ARGUMENTOS DE OBTENER PROPIEDADES DE UN OBJETO
    //Aplicamos desestructuracion
    //Para ello dentro del forEach si ponemos--> forEach(({propiedad de interfaz}))
        //Podremos obtener esa propiedad sin necesidad de utlizar el objeto entero como el caso anterior
        //Es como si dijeramos que dentro de cada interaccion con { } nos de sus atributos directamente
        //Si ponemos detras de la propiedad una coma -->, podremos seguir sacando mas valores
    productos.forEach(({precio}) =>{
        total += precio;
    })
    return total * 0.15;
}

const articulos : Producto[] = [telefono, tableta];
const isv = calculaISV(articulos);
console.log('ISV:',isv+"€");

//Utilizando mas desestructuracion devolviendo arrays
export function calculaISVArreglos( productos: Producto[]):[number,number]{
    let total = 0;
    productos.forEach(({precio}) =>{
        total += precio;
    })
    return [total,total * 0.15];
}

const [total, isvArr] = calculaISVArreglos(articulos);
console.log('Total:'+total+'€ ISV:'+isvArr+"€");