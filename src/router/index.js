import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../view/inicio.vue'
import Tipos from '../view/tipos.vue'
import Operadores from '../view/Operadores.vue'
import Variables from '../view/variables.vue'
import Objetos from '../view/objetos.vue'
import EntradaSalida from '../view/EntradaSalida.vue' //

const routes = [
    { path: '/', component: Inicio },
    { path: '/tipos', component: Tipos },
    { path: '/operadores', component: Operadores },
    { path: '/variables', component: Variables },
    { path: '/objetos', component: Objetos },
    { path: '/entrada', component: EntradaSalida } //
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router