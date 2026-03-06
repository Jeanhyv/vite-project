<template>
  <header class="inicio-header">
    <h1>¿Qué es JavaScript?</h1>
    <p>El lenguaje que da vida e interactividad a las páginas web.</p>
  </header>

  <main>
    <section class="info">
      <h2>📘 Definición</h2>
      <p>
        JavaScript es un lenguaje de programación interpretado que permite agregar
        interactividad y dinamismo a las páginas web. Es ejecutado por el navegador y
        trabaja junto con HTML y CSS para crear experiencias modernas en internet.
      </p>
    </section>

    <section class="ejemplos">
      <h2>🧠 Ejemplos Interactivos</h2>

      <div class="card">
        <h3>1️⃣ Cambiar texto con un clic</h3>
        <p>{{ textoInformativo }}</p>
        <button @click="cambiarTexto">Cambiar texto</button>
      </div>

      <div class="card">
        <h3>2️⃣ Mostrar un mensaje emergente</h3>
        <button @click="mostrarAlerta">Mostrar alerta</button>
      </div>

      <div class="card">
        <h3>3️⃣ Cambiar color de fondo</h3>
        <button @click="cambiarColorLocal">Cambiar color de fondo</button>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';

// --- Lógica del Ejemplo 1 (Reactividad) ---
const textoInformativo = ref("Haz clic en el botón para cambiar este texto.");
const cambiarTexto = () => {
  textoInformativo.value = "¡El texto ha cambiado con Vue.js! 🚀";
};

// --- Lógica del Ejemplo 2 ---
const mostrarAlerta = () => {
  alert("¡Hola! Este mensaje fue generado con JavaScript desde un componente de Vue 😄");
};

// --- Lógica del Ejemplo 3 ---
const cambiarColorLocal = () => {
  const colores = ["#f4f4f9", "#ffe6e6", "#e6ffe6", "#e6f0ff", "#fff5e6"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
};
</script>

<style scoped>
/* Estilos específicos para esta página */
.inicio-header {
  text-align: center;
  margin-bottom: 2rem;
}

.info {
  margin-bottom: 2rem;
  line-height: 1.6;
}

.ejemplos {
  display: grid;
  gap: 1.5rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-left: 5px solid #2b7cff;
}

button {
  background-color: #2b7cff;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

button:hover {
  background-color: #0052cc;
}
</style>