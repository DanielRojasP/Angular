

/*
    ===== Código de TypeScript =====
*/


function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = " ocerride";
    };
}



@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABCD1234';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

const miClse = new MiSuperClase();
console.log(miClse.miPropiedad);