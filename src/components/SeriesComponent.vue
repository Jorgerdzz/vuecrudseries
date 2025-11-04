<template>
  <div class="container mt-5 d-flex justify-content-center">
    <div
      class="card shadow-lg border-light"
      style="max-width: 25rem; border-radius: 15px; overflow: hidden"
    >
      <!-- Imagen de la serie con overlay -->
      <div class="position-relative">
        <img
          :src="serie.imagen"
          class="card-img-top"
          alt="Serie image"
          style="height: 350px; object-fit: cover"
        />
        <div class="position-absolute top-0 end-0 m-3">
          <span class="badge bg-primary rounded-pill fs-6 px-3 py-2 shadow-sm">
            <i class="bi bi-star-fill me-1"></i> {{ serie.puntuacion }}
          </span>
        </div>
      </div>

      <!-- Cuerpo de la tarjeta con estilo mejorado -->
      <div class="card-body bg-light">
        <h3
          class="card-title fw-bolder text-primary text-uppercase mb-3 text-center"
        >
          <i class="bi bi-film me-2"></i>{{ serie.nombre }}
        </h3>

        <div class="mb-3 text-center">
          <p class="card-text text-muted mb-0">
            <i class="bi bi-award me-2"></i>
            <span class="fw-semibold">Puntuación IMDB:</span>
            <span class="text-dark fs-5 fw-bold">{{ serie.puntuacion }}</span>
          </p>
        </div>

        <!-- Botón estilizado -->
        <div class="d-grid gap-2">
          <router-link
            :to="'/personajes/' + serie.idSerie"
            class="btn btn-primary btn-lg fw-semibold shadow-sm"
          >
            <i class="bi bi-people-fill me-2"></i>Ver Personajes
          </router-link>
        </div>
      </div>

      <!-- Footer decorativo -->
      <div class="card-footer bg-primary text-center py-2">
        <small class="text-light">
          <i class="bi bi-tv me-1"></i> Serie de TV
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSeries from "@/services/ServiceSeries";
const service = new ServiceSeries();
export default {
  name: "SeriesComponent",
  data() {
    return {
      serie: [],
    };
  },
  methods: {
    loadSerie() {
      service.getSerie(this.$route.params.idserie).then((result) => {
        this.serie = result;
      });
    },
  },
  mounted() {
    this.loadSerie();
  },
  watch: {
    "$route.params.idserie"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loadSerie();
      }
    },
  },
};
</script>
