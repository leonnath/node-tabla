const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')

//Hacer tabla de multiplicar 
console.clear()



//const [ , , arg3 = 'base=5'] = process.argv
//const [, base = 5] = arg3.split('=')

//console.log(process.argv)

//console.log('base: yargs', argv.base)



//const base = 12

crearArchivo( argv.b , argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.hidden))
    .catch(err => console.log(err))
