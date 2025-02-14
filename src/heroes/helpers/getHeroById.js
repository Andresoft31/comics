

// import { heroes } from "../data/heroes";  // Asegúrate de que la ruta y el nombre del archivo son correctos

// /**
//  * Busca y devuelve un héroe por su ID.
//  * @param {string} id El ID del héroe a buscar.
//  * @return {Object} El héroe encontrado o undefined si no existe.
//  */
// export const getHeroById = (id) => {
//     return heroes.find(hero => hero.id === id);
// }



import {heroes}  from '../data/heroes';

export const getHeroById = (id) => {

    return heroes.find( hero => hero.id === id );
}


// // getHeroById.js
// import { heroes } from '../data/heroes';  // Asegúrate de que la ruta es correcta

// export const getHeroById = (id) => {
//     const {id} = Number(id);  // Convertimos el 'id' de string a número
//     if (isN)) {  // Verificamos si numericId no es un número
//         console.error("El ID proporcionado no es un número válido:", id);
//         return null;  // Devolvemos null si el id no es un número
//     }
//     return heroes.find(hero => hero.id === numericId);  // Buscamos el héroe por su id numérico
// }


// // Asegúrate de importar correctamente el array 'heroes'
// import { heroes } from '../data/heroes';



// export const getHeroById = (id) => {

//     const { id } = useParams();
//     // Convertimos 'id' a un número para realizar la comparación correctamente,
//     // especialmente si 'id' proviene de la URL como un string.
//     const numericId = Number(id);

//     // Verificamos si 'numericId' es NaN. Si lo es, no tiene sentido continuar y deberíamos manejar este caso.
//     if (isNaN(nodes)) {
//         console.error("El ID proporcionado no es un número válido:", id);
//         return null;
//     }

//     // Buscamos en el array de héroes el que tenga un 'id' que corresponda con 'numericId'.
//     return heroes.find(hero => hero.id === numericId);
// }


// export const getHeroById=  (id) => {


//     return heroes.find(hero => hero.id === id);




// }


// export const getHeroById = (id) => {
//     const numericId = Number(id);
//     if (isNaN(numeric_id)) {
//         console.error("ID proporcionado no es un número válido:", id);
//         return null; // O manejar el error de otra manera
//     }
//     return heroes.find(hero => hero.id === numericId);

// }
