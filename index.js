const { registrar, leer } = require('./operaciones')

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)

if (operacion === 'registrar') {
  if (!nombre || !edad || !tipo || !color || !enfermedad) {
    console.log('❌ Error: Faltan datos. Uso: node index.js registrar nombre edad tipo color enfermedad')
  }

  registrar(nombre, edad, tipo, color, enfermedad)
} else if (operacion === 'leer') {
  leer()
} else {
  console.log(`
📋 Veterinaria - Registro de Pacientes
======================================
Comandos disponibles:

✅ Registrar una nueva mascota:
   👉 node index.js registrar nombre edad tipo color enfermedad
   
   🐶 Ejemplo:
   node index.js registrar Firulais 3 perro marrón otitis

🔍 Ver todas las mascotas registradas:
   👉 node index.js leer
  `)
}
