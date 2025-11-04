<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg border-bottom border-light">
    <div class="container-fluid">
    <!-- Marca de Navegación con estilo resaltado -->
    <router-link class="navbar-brand fw-bolder fs-5 text-uppercase" to="#">
    <i class="bi bi-controller me-2"></i> Personajes App
    </router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!-- Enlaces principales -->
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">
                            <i class="bi bi-house-door-fill me-1"></i> Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/create">
                            <i class="bi bi-plus-circle me-1"></i> Nuevo personaje
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/update">
                            <i class="bi bi-pencil-square me-1"></i> Modificar personaje
                        </router-link>
                    </li>
                    
                    <!-- Dropdown de Series -->
                    <li class="nav-item dropdown">
                        <router-link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-journals me-1"></i> Series
                        </router-link>
                        <ul class="dropdown-menu dropdown-menu-dark shadow-sm">
                            <!-- Los elementos dinámicos mantienen el estilo de Bootstrap -->
                            <li v-for="serie in series" :key="serie">
                                <router-link class="dropdown-item" :to="'/series/' + serie.idSerie">
                                    {{serie.nombre}}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
                
                <!-- Formulario de búsqueda con estilo uniforme -->
                <form class="d-flex" role="search">
                    <input class="form-control me-2 border-light" type="search" placeholder="Buscar..." aria-label="Search"/>
                    <!-- Botón de búsqueda en estilo claro para contrastar con el fondo azul -->
                    <button class="btn btn-outline-light fw-semibold" type="submit">
                        <i class="bi bi-search"></i> Buscar
                    </button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
import ServiceSeries from '../services/ServiceSeries';
const service = new ServiceSeries();
    export default{
        name: "MenuComponent",
        data(){
            return{
                series: []
            }
        },
        mounted(){
            service.getSeries().then(result=>{
                this.series = result
            })
        }
    }
</script>