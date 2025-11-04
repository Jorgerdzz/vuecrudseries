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
              <i class="bi bi-pencil-square me-2"></i>Modificar Personaje
            </h1>
          </div>

          <!-- Cuerpo del formulario -->
          <div class="card-body bg-light p-4">
            <form v-on:submit.prevent="updatePersonaje()">
              <!-- Campo Serie -->
              <div class="mb-4">
                <label class="form-label fw-semibold text-dark">
                  <i class="bi bi-tv me-2"></i>Serie Destino
                </label>
                <select
                  class="form-select form-select-lg shadow-sm"
                  v-model="idSerie"
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

              <!-- Campo Personaje -->
              <div class="mb-4">
                <label class="form-label fw-semibold text-dark">
                  <i class="bi bi-person-badge me-2"></i>Personaje
                </label>
                <select
                  class="form-select form-select-lg shadow-sm"
                  v-model="idPersonaje"
                  style="border-radius: 10px"
                >
                  <option value="0" disabled>Selecciona un personaje</option>
                  <option
                    v-for="personaje in personajes"
                    :key="personaje"
                    :value="personaje.idPersonaje"
                  >
                    {{ personaje.nombre }}
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
                  <i class="bi bi-save-fill me-2"></i>Guardar Cambios
                </button>
              </div>
            </form>
          </div>

          <!-- Footer decorativo -->
          <div class="card-footer bg-primary text-center py-2">
            <small class="text-light">
              <i class="bi bi-info-circle me-1"></i>Selecciona el personaje y la
              serie destino
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSeries from "@/services/ServiceSeries";
import Swal from "sweetalert2";
const service = new ServiceSeries();
export default {
  name: "UpdatePersonaje",
  data() {
    return {
      series: [],
      personajes: [],
      idSerie: 0,
      idPersonaje: 0,
    };
  },
  methods: {
    loadSeries() {
      service.getSeries().then((result) => {
        this.series = result;
      });
    },
    loadPersonajes() {
      service.getPersonajes().then((result) => {
        this.personajes = result;
      });
    },
    updatePersonaje() {
      service.updatePersonaje(this.idPersonaje, this.idSerie).then(() => {
        Swal.fire({
          icon: "question",
          title: "¿Desea modificar el personaje de serie?",
          timer: 3000,
          timerProgressBar: true,
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: "success",
              title: "Personaje modificado correctamente",
              timer: 3000,
              timerProgressBar: true,
            }).then(() => {
              this.$router.push("/personajes/" + this.idSerie);
            });
          }
        });
      });
    },
  },
  mounted() {
    this.loadSeries();
    this.loadPersonajes();
  },
};
</script>
