

/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento:T){
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumbero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,12,,12,32]);

let soyExplicito = queTipoSoy<number>(100);
