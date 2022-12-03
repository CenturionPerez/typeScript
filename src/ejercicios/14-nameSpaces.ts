//NAMESPACE
    //Es un agrupador o pequeña clase que podemos tener lo que queramos
    //Solo podemos acceder a lo que contienen si lo exportamos
    namespace Validations{
        export const validateText = (text: string):boolean => {
            return (text.length >3) ? true : false;
        }

        const validateDate = (fecha: Date): boolean => {
            return (isNaN(fecha.valueOf())) ? false : true; //Si no es un numero isNaN
        }

        //Si queremos usar una propiedad de un nameSpace
        //debemos exportar aquello que contenga dentro
        console.log(Validations.validateText('Alberto'));
    }