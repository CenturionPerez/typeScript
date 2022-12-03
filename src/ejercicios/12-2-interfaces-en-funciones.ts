(() => {

    interface addTwoNumbers{
        //Asi podemos declarar dentro de una interfaz una funcion
        (a: number, b:number): number;

    }
    let addNumbersFunction: addTwoNumbers;
    addNumbersFunction = (a: number, b:number) => {
        return 10;
    }


    
})