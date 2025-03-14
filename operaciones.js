const fs = require("fs");

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };
    let citas = [];

    try {
        const data = fs.readFileSync("citas.json", "utf8");
        citas = JSON.parse(data);
    } catch (error) {
            console.error("❌ Error al leer el archivo:", error.message);
        }
    

    citas.push(nuevaCita);

    try {
        fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));
        console.log("✅ La cita se ha registrado correctamente.");
    } catch (error) {
        console.error("❌ Error al guardar la cita:", error.message);
    }
};

const leer = () => {
    try {
        const data = fs.readFileSync("citas.json", "utf8");
        const citas = JSON.parse(data);

        if (citas.length === 0) {
            console.log("⚠️ No hay citas registradas.");
            return;
        }

        console.log("\n=== 📋 REGISTRO DE CITAS ===");
        console.table(citas);
    } catch (error) {
  
            console.error("❌ Error al leer las citas:", error.message);
            }
};


module.exports = { registrar, leer };
