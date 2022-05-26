// fetch("./text.txt")
// .then( resolve => resolve.json() )
//     .then( resolve => console.log(resolve) )
// .catch( reject => console.log(reject) )
// .finally( end => alert('La peticion termino') )

// const x = 10;

// const promesa = new Promise( (resolve, reject ) => {

//     if( x == 10 ) {
//         resolve({respuesta: 'El numero es igual a 10'})
//     }else {
//         reject({respuesta: 'El numero es diferente a 10'})
//     }

// } );

// promesa.then( resolve => console.log( resolve ) )
// .catch( reject => console.log(reject) )

const id = 5;

const empleados = [
    {
        id: 1,
        nombre: "Jose"
    },
    {
        id: 2,
        nombre: "Kelly"
    },
    {
        id: 3,
        nombre: "Danilo"
    }
];

const salarios = [
    {
        id: 1,
        sueldo: 1000000
    },
    {
        id: 2,
        sueldo: 5000000
    }
];


const getEmpleado = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        const empleado = empleados.find( e => e.id == id )?.nombre;
        
        if ( empleado ) {
            resolve( empleado );

        } else {
            reject(`No existe el empleado con el id: ${ id }`);
        }
    } );
}

const getSalario = ( id ) => {
    return new Promise( ( resp, err ) => {
        const salario = salarios.find( s => s.id == id )?.sueldo;
        
        if ( salario ) {
            resp( salario );

        } else {
            err(`No existe salario para el id: ${ id }`);

        }
    } );
}

// getEmpleado( id )
//     .then( emp => {
//         getSalario( id )
//             .then( sal => console.log('el empleado: ' + emp, 'tiene un salario: ' + sal ) )
//             .catch( err => console.log( err ))
//     } )
//     .catch( err => console.log(err) )

const getInfoEmpleados = async indet  => {
    try {
        const empleado = await getEmpleado( indet );
        const sueldo = await getSalario( indet );

        return `el empleado: ${empleado} tiene un salario: ${sueldo}` ;
    } catch ( err ) {
        throw err;

    }
}

getInfoEmpleados( id )
    .then( resp => console.log( resp ) )
    .catch( err => console.log( err ) )