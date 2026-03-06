<template>
  <header>
    <h1>Variables</h1>
  </header>

  <main>
    <section class="info">
      <h2>📘 ¿Qué es una variable?</h2>
      <p>
        Una <strong>variable</strong> es un contenedor que guarda información o valores que pueden cambiar durante la ejecución de un programa.
        En JavaScript se pueden declarar con <code>var</code>, <code>let</code> o <code>const</code>.
      </p>
    </section>

    <section class="ejemplos">
      <h2>🧩 Tipos de declaración de variables</h2>

      <div class="card">
        <h3>1️⃣ var</h3>
        <p>
          <strong>var</strong> es la forma más antigua de declarar variables.  
          Tiene <em>alcance de función</em> y permite redeclaraciones.
        </p>
        <pre><code>var nombre = "Jean";</code></pre>
        <button @click="ejemploVar">Probar ejemplo</button>
      </div>

      <div class="card">
        <h3>2️⃣ let</h3>
        <p>
          <strong>let</strong> tiene <em>alcance de bloque</em> y no puede redeclararse dentro del mismo ámbito.
        </p>
        <pre><code>let edad = 21;</code></pre>
        <button @click="ejemploLet">Probar ejemplo</button>
      </div>

      <div class="card">
        <h3>3️⃣ const</h3>
        <p>
          <strong>const</strong> se usa para valores que no cambian.  
          Una vez asignado, no puede modificarse.
        </p>
        <pre><code>const pais = "México";</code></pre>
        <button @click="ejemploConst">Probar ejemplo</button>
      </div>
    </section>

    <section class="ejemplos">
      <h2>⚙️ Comportamientos especiales</h2>

      <div class="card">
        <h3>💡 Hoisting con var</h3>
        <p>Las variables declaradas con <code>var</code> se “elevan” (hoisting) antes de su ejecución.</p>
        <pre><code>console.log(x); // undefined; var x = 5;</code></pre>
        <button @click="ejemploHoisting">Probar ejemplo</button>
      </div>

      <div class="card">
        <h3>🔒 let y const dentro de bloques</h3>
        <p>
          Las variables declaradas con <code>let</code> y <code>const</code> solo existen dentro del bloque donde fueron declaradas.
        </p>
        <button @click="ejemploBloques">Probar ejemplo</button>
      </div>
    </section>
  </main>
</template>

<script setup>
// Funciones migradas de tu script.js
const ejemploVar = () => {
  var nombre = "Jean";
  var nombre = "Héctor"; // Se puede redeclarar
  alert(`Variable var:\nNombre actual: ${nombre}`);
};

const ejemploLet = () => {
  let edad = 21;
  edad = 22; // Puede cambiar, pero no redeclararse
  alert(`Variable let:\nEdad actualizada: ${edad}`);
};

const ejemploConst = () => {
  const pais = "México";
  alert(`Variable const:\nPaís: ${pais}`);
};

const ejemploHoisting = () => {
  alert("Revisa la consola (F12) para ver el resultado del hoisting.");
  // Nota: En modo estricto de Vite/ESM, el comportamiento puede variar
  console.log("Valor antes de declarar (Hoisting):", x); 
  var x = 5;
  console.log("Valor después de asignar:", x);
};

const ejemploBloques = () => {
  alert("Abre la consola para ver el comportamiento de let y const.");
  {
    let a = 10;
    const b = 20;
    console.log("Dentro del bloque → a:", a, "b:", b);
  }
  try {
    console.log("Intentando acceder fuera del bloque → a:", a);
  } catch (error) {
    console.log("Error: 'a' no está definida fuera del bloque.");
  }
};
</script>

<style scoped>
.info {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border-left: 5px solid #2b7cff;
}

pre {
  background: #272822;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.9rem;
  margin: 1rem 0;
}

.ejemplos {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

button {
  background-color: #2b7cff;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease;
}

button:hover {
  background-color: #0052cc;
}
</style>