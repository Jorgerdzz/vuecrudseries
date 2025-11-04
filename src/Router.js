import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import SeriesComponent from './components/SeriesComponent.vue';
import PersonajesComponent from './components/PersonajesComponent.vue';
import CreatePersonaje from './components/CreatePersonaje.vue';
import UpdatePersonaje from './components/UpdatePersonaje.vue';

const routes = [
    {path: "/", component: HomeComponent},
    {path: "/series/:idserie", component: SeriesComponent},
    {path: "/personajes/:idserie", component: PersonajesComponent},
    {path: "/create", component: CreatePersonaje},
    {path: "/update", component: UpdatePersonaje}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;