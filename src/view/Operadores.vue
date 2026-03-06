<template>
  <header>
    <h1>Operadores y Expresiones</h1>
  </header>

  <main>
    <section class="info">
      <h2>📘 ¿Qué son los operadores y expresiones?</h2>
      <p>
        Una <strong>expresión</strong> es cualquier combinación de valores, variables
        y operadores que produce un resultado.  
        Los <strong>operadores</strong> son los símbolos que permiten realizar operaciones sobre esos valores.
      </p>
    </section>

    <section class="ejemplos">
      <h2>🧮 Tipos de Operadores</h2>

      <div class="card">
        <h3>1️⃣ Aritméticos</h3>
        <p>Permiten realizar operaciones matemáticas básicas.</p>
        <pre><code>+, -, *, /, %, ++, --</code></pre>
        <button @click="ejemploAritmetico">Probar ejemplo</button>
      </div>

      <div class="card">
        <h3>2️⃣ De Asignación</h3>
        <p>Sirven para asignar valores a variables.</p>
        <pre><code>=, +=, -=, *=, /=, %=</code></pre>
        <button @click="ejemploAsignacion">Probar ejemplo</button>
      </div>

      <div class="card">
        <h3>3️⃣ Comparación</h3>
        <p>Comparan dos valores y devuelven un resultado booleano.</p>
        <pre><code>==, ===, !=, !==, >, <, >=, <=</code></pre>
        <button @click="ejemploComparacion">Probar ejemplo</button>
      </div>

      <div class="card">
        <h3>4️⃣ Lógicos</h3>
        <p>Permiten combinar o negar condiciones.</p>
        <pre><code>&& (AND), || (OR), ! (NOT)</code></pre>
        <button @click="ejemploLogico">Probar ejemplo</button>
      </div>

      <div class="card">
        <h3>5️⃣ De Concatenación</h3>
        <p>Usados para unir cadenas de texto.</p>
        <pre><code>"Hola " + "Mundo"</code></pre>
        <button @click="ejemploConcatenacion">Probar ejemplo</button>
      </div>
    </section>

    <section class="ejemplos">
      <h2>⚙️ Operadores con Diferentes Semánticas</h2>

      <div class="card">
        <h3>🧠 Operador +</h3>
        <p>Puede sumar números o concatenar cadenas.</p>
        <pre><code>5 + 10 → 15 | "Hola" + " Mundo" → "Hola Mundo"</code></pre>
        <button @click="ejemploMas">Probar operador +</button>
      </div>

      <div class="card">
        <h3>🧮 Operador == vs ===</h3>
        <p><strong>==</strong> compara solo valores, <strong>===</strong> compara tipo y valor.</p>
        <pre><code>5 == "5" → true | 5 === "5" → false</code></pre>
        <button @click="ejemploComparacionEstricta">Probar comparación</button>
      </div>

      <div class="card">
        <h3>🔁 Operador ternario (?:)</h3>
        <p>Evalúa una condición de forma compacta en una sola línea.</p>
        <button @click="ejemploTernario">Probar ternario</button>
      </div>
    </section>
  </main>
</template>

<script setup>
// Trasladamos las funciones lógicas desde tu script original
const ejemploAritmetico = () => {
  let a = 10, b = 3;
  let resultado = `Suma: ${a + b}\nResta: ${a - b}\nMultiplicación: ${a * b}\nDivisión: ${a / b}\nMódulo: ${a % b}`;
  alert(resultado);
};

const ejemploAsignacion = () => {
  let x = 5;
  x += 3; 
  x *= 2;
  alert(`Resultado después de x += 3 y x *= 2 es: ${x}`);
};

const ejemploComparacion = () => {
  let a = 10, b = "10";
  let texto = `a == b → ${a == b}\na === b → ${a === b}\na != b → ${a != b}\na > 5 → ${a > 5}`;
  alert(texto);
};

const ejemploLogico = () => {
  let x = true, y = false;
  alert(`x && y → ${x && y}\nx || y → ${x || y}\n!x → ${!x}`);
};

const ejemploConcatenacion = () => {
  let saludo = "Hola", nombre = "Jean";
  alert(saludo + " " + nombre + " 👋");
};

const ejemploMas = () => {
  let suma = 5 + 10;
  let texto = "Hola" + " Mundo";
  alert(`5 + 10 = ${suma}\n"Hola" + " Mundo" = ${texto}`);
};

const ejemploComparacionEstricta = () => {
  let a = 5, b = "5";
  alert(`5 == "5" → ${a == b}\n5 === "5" → ${a === b}`);
};

const ejemploTernario = () => {
  let edad = prompt("Ingresa tu edad:");
  let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
  alert(mensaje);
};
</script>

<style scoped>
/* Reutilizamos los estilos base para mantener coherencia */
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