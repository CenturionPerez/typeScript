(() => {

        //CLASES QUE IMPLEMENTAN INTERFACES
        interface Xmen{
            name: string,
            realName: string,
            muntaPower(id:number):string;
        }

        interface Human {
            age:number;
        }

        //Una clase nunca puede extender de una interfaz, solo puede implementarla
        //Una clase puede implementar varias interfaces
        class Mutant implements Xmen, Human {
             public age: number;
             public name: string;
             public realName: string;

             muntaPower(id:number){
                return this.name;
             }

        }
        const mutant = new Mutant();

})()