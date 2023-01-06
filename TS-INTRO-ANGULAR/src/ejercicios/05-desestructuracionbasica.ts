/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen : number;
    segundo : number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio:number;
}

const reproductor : Reproductor = {
    volumen: 90,
    segundo : 12,
    cancion: 'Mess',
    detalles:{
        autor: 'Ed  Sheeran',
        anio: 2015
    }
}

const {volumen, segundo, cancion,detalles} = reproductor;
const {autor, anio} = detalles;

// console.log('El volumen actual de: ', volumen);
// console.log('El segundo actual de: ', segundo);
// console.log('El cancion actual de: ', cancion);
// console.log('El autor es: ', autor);

const dbz : string [] = ['Goku','Vegueta','Trunks'];
const [goku,vegueta,trunks] = dbz;

console.log('Personaje 1:', goku);
console.log('Personaje 2:', vegueta);
console.log('Personaje 3:', trunks);