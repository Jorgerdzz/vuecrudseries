<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <!-- Card con estilo elegante -->
        <div
          class="card shadow-lg border-light"
          style="border-radius: 15px; overflow: hidden"
        >
          <!-- Header del formulario -->
          <div class="card-header bg-primary text-light text-center py-4">
            <h1 class="fw-bolder text-uppercase mb-0">
              <i class="bi bi-plus-circle-fill me-2"></i>Crear Personaje
            </h1>
          </div>

          <!-- Cuerpo del formulario -->
          <div class="card-body bg-light p-4">
            <form v-on:submit.prevent="insertPersonaje()">
              <!-- Campo Nombre -->
              <div class="mb-4">
                <label class="form-label fw-semibold text-dark">
                  <i class="bi bi-person-badge me-2"></i>Nombre
                </label>
                <input
                  type="text"
                  class="form-control form-control-lg shadow-sm"
                  v-model="personaje.nombre"
                  placeholder="Ingresa el nombre del personaje"
                  style="border-radius: 10px"
                />
              </div>

              <!-- Campo Imagen -->
              <div class="mb-4">
                <label class="form-label fw-semibold text-dark">
                  <i class="bi bi-image me-2"></i>Imagen
                </label>
                <input
                  type="text"
                  class="form-control form-control-lg shadow-sm"
                  v-model="personaje.imagen"
                  placeholder="URL de la imagen"
                  style="border-radius: 10px"
                />
              </div>

              <!-- Campo Serie -->
              <div class="mb-4">
                <label class="form-label fw-semibold text-dark">
                  <i class="bi bi-tv me-2"></i>Serie
                </label>
                <select
                  class="form-select form-select-lg shadow-sm"
                  v-model="personaje.idSerie"
                  style="border-radius: 10px"
                >
                  <option value="0" disabled>Selecciona una serie</option>
                  <option
                    v-for="serie in series"
                    :key="serie"
                    :value="serie.idSerie"
                  >
                    {{ serie.nombre }}
                  </option>
                </select>
              </div>

              <!-- Botón de envío -->
              <div class="d-grid gap-2 mt-4">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg fw-semibold shadow-sm"
                  style="border-radius: 10px"
                >
                  <i class="bi bi-check-circle-fill me-2"></i>Insertar Personaje
                </button>
              </div>
            </form>
          </div>

          <!-- Footer decorativo -->
          <div class="card-footer bg-primary text-center py-2">
            <small class="text-light">
              <i class="bi bi-shield-check me-1"></i>Completa todos los campos
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSeries from "@/services/ServiceSeries";
const service = new ServiceSeries();
export default {
  name: "CreatePersonaje",
  data() {
    return {
      personaje: {
        nombre: "",
        imagen: "",
        idSerie: 0,
      },
      series: [],
    };
  },
  methods: {
    loadSeries() {
      service.getSeries().then((result) => {
        this.series = result;
      });
    },
    insertPersonaje() {
      service.insertPersonaje(this.personaje).then(() => {
        this.$router.push("/personajes/" + this.personaje.idSerie);
      });
    },
  },
  mounted() {
    this.loadSeries();
  },
};
</script>
