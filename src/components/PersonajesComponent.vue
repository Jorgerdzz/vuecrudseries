<template>
  <div class="container mt-5">
    <!-- Encabezado con estilo -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="fw-bolder text-primary text-uppercase">
        <i class="bi bi-people-fill me-2"></i>Personajes
      </h1>
      <router-link
        class="btn btn-primary btn-lg fw-semibold shadow-sm"
        :to="'/series/' + $route.params.idserie"
      >
        <i class="bi bi-arrow-left-circle me-2"></i>Volver a serie
      </router-link>
    </div>

    <!-- Tabla con estilo elegante -->
    <div
      class="table-responsive shadow-lg"
      style="border-radius: 15px; overflow: hidden"
    >
      <table class="table table-hover table-striped mb-0">
        <thead class="bg-primary text-light">
          <tr>
            <th class="fw-bolder text-uppercase py-3">
              <i class="bi bi-person-badge me-2"></i>Personaje
            </th>
            <th class="fw-bolder text-uppercase py-3">
              <i class="bi bi-image me-2"></i>Imagen
            </th>
          </tr>
        </thead>
        <tbody class="bg-light">
          <tr v-for="person in personajes" :key="person">
            <td class="align-middle py-3 fw-semibold text-dark">
              {{ person.nombre }}
            </td>
            <td class="align-middle py-3">
              <img
                :src="person.imagen"
                class="img-thumbnail shadow-sm"
                alt="Personaje"
                style="
                  width: 120px;
                  height: 120px;
                  object-fit: cover;
                  border-radius: 10px;
                "
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ServiceSeries from "@/services/ServiceSeries";
const service = new ServiceSeries();
export default {
  name: "PersonajesComponent",
  data() {
    return {
      personajes: [],
    };
  },
  methods: {
    loadPersonajes() {
      service.getPersonajesSerie(this.$route.params.idserie).then((result) => {
        this.personajes = result;
      });
    },
  },
  mounted() {
    this.loadPersonajes();
  },
};
</script>
