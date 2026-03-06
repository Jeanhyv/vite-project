<template>
  <nav class="navbar">
    <div class="logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Logo JS" style="height: 2em;">
      <span>JavaScript</span>
    </div>
    <div class="nav-links">
      <router-link to="/">Inicio</router-link>
      <router-link to="/tipos">Tipos de datos</router-link>
      <router-link to="/operadores">Operadores</router-link>
      <router-link to="/variables">Variables</router-link>
      <router-link to="/objetos">Objetos</router-link>
      <router-link to="/entrada">Entrada/Salida</router-link>
    </div>
  </nav>

  <div class="main-content">
    <router-view></router-view>
  </div>
</template>

<script setup>
// Esta lógica cambiará el fondo de todo el sitio
const cambiarColor = () => {
  const colores = ["#f4f4f9", "#ffe6e6", "#e6ffe6", "#e6f0ff", "#fff5e6"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
};
</script>

<style>
/* Estilos para que la navegación se vea profesional */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2b7cff;
  padding: 0.8rem 1.5rem;
  color: white;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  transition: 0.3s;
}

/* Clase automática de Vue para resaltar el link donde estamos */
.router-link-active {
  background-color: #0052cc;
}

.btn-color {
  background: rgba(255,255,255,0.2);
  border: none; 
  color: white; 
  cursor: pointer; 
  padding: 5px 10px; 
  border-radius: 4px;
  margin-left: 10px;
}

.btn-color:hover {
  background: rgba(255,255,255,0.4);
}

.main-content {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}
</style>