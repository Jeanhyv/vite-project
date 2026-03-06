<template>
  <header>
    <h1>Objetos, Propiedades y Métodos</h1>
  </header>

  <main>
    <section class="info">
      <h2>🏗️ ¿Qué es un objeto?</h2>
      <p>
        Un <strong>objeto</strong> es una colección de datos y funciones agrupadas bajo un mismo nombre. 
        Los datos se almacenan en <strong>propiedades</strong> y las funciones dentro del objeto se llaman <strong>métodos</strong>.
      </p>
      <pre><code>
let persona = {
  nombre: "Jean",
  edad: 21,
  saludar: function() {
    alert("Hola, soy " + this.nombre);
  }
};
      </code></pre>
    </section>

    <section class="ejemplos">
      <h2>🧩 Ejemplos de objetos, propiedades y métodos</h2>

      <div class="card">
        <h3>1️⃣ Crear un objeto simple</h3>
        <p>Un objeto puede tener varias propiedades con diferentes tipos de datos.</p>
        <pre><code>let coche = { marca: "Toyota", modelo: "Corolla", año: 2020 };</code></pre>
        <button @click="ejemploObjetoSimple">Probar ejemplo</button>
      </div>

      <div class="card">
        <h3>2️⃣ Acceder a propiedades</h3>
        <p>Podemos acceder a las propiedades usando punto (.) o corchetes [].</p>
        <pre><code>alert(coche.marca); alert(coche["modelo"]);</code></pre>
        <button @click="ejemploAccederPropiedades">Probar ejemplo</button>
      </div>

      <div class="card">
        <h3>3️⃣ Modificar propiedades</h3>
        <p>Podemos cambiar el valor de una propiedad o agregar nuevas.</p>
        <pre><code>coche.color = "Rojo"; coche.año = 2023;</code></pre>
        <button @click="ejemploModificarPropiedades">Probar ejemplo</button>
      </div>

      <div class="card">
        <h3>4️⃣ Agregar métodos</h3>
        <p>Los métodos son funciones dentro del objeto que pueden usar <code>this</code>.</p>
        <button @click="ejemploMetodo">Probar ejemplo</button>
      </div>

      <div class="card">
        <h3>5️⃣ Objetos anidados</h3>
        <p>Un objeto puede contener otros objetos dentro.</p>
        <button @click="ejemploObjetoAnidado">Probar ejemplo</button>
      </div>

      <div class="card">
        <h3>6️⃣ Recorrer propiedades con for...in</h3>
        <p>Revisa la consola (F12) para ver el resultado.</p>
        <button @click="ejemploRecorrerObjeto">Probar ejemplo</button>
      </div>
    </section>
  </main>
</template>

<script setup>
// Trasladamos la lógica de script.js aquí
const ejemploObjetoSimple = () => {
  let coche = { marca: "Toyota", modelo: "Corolla", año: 2020 };
  alert(`Coche creado:\nMarca: ${coche.marca}\nModelo: ${coche.modelo}\nAño: ${coche.año}`);
};

const ejemploAccederPropiedades = () => {
  let coche = { marca: "Nissan", modelo: "Versa", año: 2021 };
  alert(`Acceso por punto: ${coche.marca}\nAcceso por corchetes: ${coche["modelo"]}`);
};

const ejemploModificarPropiedades = () => {
  let coche = { marca: "Honda", modelo: "Civic", año: 2019 };
  coche.color = "Rojo";
  coche.año = 2024;
  alert(`Coche actualizado:\nColor: ${coche.color}\nAño: ${coche.año}`);
};

const ejemploMetodo = () => {
  let persona = {
    nombre: "Jean",
    saludar: function() {
      alert(`Hola, soy ${this.nombre} 👋`);
    }
  };
  persona.saludar();
};

const ejemploObjetoAnidado = () => {
  let estudiante = {
    nombre: "Héctor",
    direccion: { ciudad: "México", cp: 12345 }
  };
  alert(`Ciudad: ${estudiante.direccion.ciudad}\nCP: ${estudiante.direccion.cp}`);
};

const ejemploRecorrerObjeto = () => {
  let coche = { marca: "Ford", modelo: "Focus", año: 2018, color: "Azul" };
  console.log("Propiedades del objeto 'coche':");
  for (let propiedad in coche) {
    console.log(`${propiedad}: ${coche[propiedad]}`);
  }
  alert("Revisa la consola (F12) para ver las propiedades recorridas.");
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
}

button {
  margin-top: 1rem;
  background-color: #2b7cff;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #0052cc;
}
</style>