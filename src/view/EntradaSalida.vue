<template>
  <header>
    <h1>Entrada y Salida de Datos</h1>
  </header>

  <main>
    <section class="info">
      <h2>📘 Captura de datos en Vue</h2>
      <p>
        A diferencia del JavaScript tradicional donde usabas <code>prompt()</code> o <code>document.getElementById().value</code>, 
        en Vue usamos <strong>v-model</strong> para conectar los inputs con nuestras variables automáticamente.
      </p>
    </section>

    <section class="ejemplos">
      <div class="card">
        <h3>📅 Calculadora de Fechas (jeanhyv8)</h3>
        <p>Introduce una fecha y los días a sumar para ver la magia de tu librería.</p>
        
        <div class="input-container">
          <label>Fecha inicial:</label>
          <input type="date" v-model="fechaBase">
          
          <label>Días a sumar:</label>
          <input type="number" v-model.number="diasParaSumar">
        </div>

        <div class="resultado-libreria">
          <p>Fecha formateada: <strong>{{ formatDate(fechaBase) }}</strong></p>
          <p>Resultado final: <strong>{{ fechaCalculada }}</strong></p>
        </div>
      </div>

      <div class="card">
        <h3>⌨️ Entrada de Texto Reactiva</h3>
        <input 
          v-model="nombreUsuario" 
          placeholder="Escribe tu nombre..."
          class="input-estilizado"
        >
        <p v-if="nombreUsuario">¡Hola, {{ nombreUsuario }}! Bienvenido a tu SPA.</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
// Importamos las funciones de tu librería jeanhyv8
import { addDays, formatDate } from 'jeanhyv8';

const fechaBase = ref(new Date().toISOString().split('T')[0]);
const diasParaSumar = ref(0);
const nombreUsuario = ref("");

// Usamos addDays de tu librería dentro de una propiedad computada
const fechaCalculada = computed(() => {
  const nuevaFecha = addDays(fechaBase.value, diasParaSumar.value);
  return formatDate(nuevaFecha);
});
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
}

input {
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.resultado-libreria {
  margin-top: 1rem;
  padding: 1rem;
  background: #f0f7ff;
  border-radius: 8px;
  border-left: 4px solid #2b7cff;
}

.input-estilizado {
  width: 100%;
  box-sizing: border-box;
}
</style>