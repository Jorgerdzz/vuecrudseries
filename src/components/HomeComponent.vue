<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section bg-primary text-light py-5 shadow-lg">
      <div class="container text-center">
        <div class="mb-4">
          <i class="bi bi-controller display-1"></i>
        </div>
        <h1 class="display-3 fw-bolder text-uppercase mb-3">
          Bienvenido a Personajes App
        </h1>
        <p class="lead fs-4 mb-4">
          Gestiona tus series y personajes favoritos en un solo lugar
        </p>
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <router-link
            to="/create"
            class="btn btn-light btn-lg fw-semibold shadow-sm px-4"
          >
            <i class="bi bi-plus-circle-fill me-2"></i>Crear Personaje
          </router-link>
          <router-link
            to="/update"
            class="btn btn-outline-light btn-lg fw-semibold px-4"
          >
            <i class="bi bi-pencil-square me-2"></i>Modificar Personaje
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container my-5">
      <div class="row g-4">
        <!-- Feature 1 -->
        <div class="col-md-4">
          <div
            class="card shadow-lg border-light h-100"
            style="border-radius: 15px; overflow: hidden"
          >
            <div class="card-body bg-light text-center p-4">
              <div class="mb-3">
                <i
                  class="bi bi-tv-fill text-primary"
                  style="font-size: 4rem"
                ></i>
              </div>
              <h3 class="card-title fw-bolder text-primary text-uppercase mb-3">
                Series
              </h3>
              <p class="card-text text-muted">
                Explora una amplia colección de series de televisión con sus
                puntuaciones IMDB
              </p>
            </div>
            <div class="card-footer bg-primary text-center py-2">
              <small class="text-light">
                <i class="bi bi-star-fill me-1"></i>Calificadas por IMDB
              </small>
            </div>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="col-md-4">
          <div
            class="card shadow-lg border-light h-100"
            style="border-radius: 15px; overflow: hidden"
          >
            <div class="card-body bg-light text-center p-4">
              <div class="mb-3">
                <i
                  class="bi bi-people-fill text-primary"
                  style="font-size: 4rem"
                ></i>
              </div>
              <h3 class="card-title fw-bolder text-primary text-uppercase mb-3">
                Personajes
              </h3>
              <p class="card-text text-muted">
                Descubre y gestiona los personajes más icónicos de cada serie
              </p>
            </div>
            <div class="card-footer bg-primary text-center py-2">
              <small class="text-light">
                <i class="bi bi-person-badge me-1"></i>Galería completa
              </small>
            </div>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="col-md-4">
          <div
            class="card shadow-lg border-light h-100"
            style="border-radius: 15px; overflow: hidden"
          >
            <div class="card-body bg-light text-center p-4">
              <div class="mb-3">
                <i
                  class="bi bi-gear-fill text-primary"
                  style="font-size: 4rem"
                ></i>
              </div>
              <h3 class="card-title fw-bolder text-primary text-uppercase mb-3">
                Gestión
              </h3>
              <p class="card-text text-muted">
                Crea, modifica y organiza personajes entre diferentes series
                fácilmente
              </p>
            </div>
            <div class="card-footer bg-primary text-center py-2">
              <small class="text-light">
                <i class="bi bi-wrench me-1"></i>CRUD completo
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="container my-5">
      <div
        class="card shadow-lg border-light"
        style="border-radius: 15px; overflow: hidden"
      >
        <div class="card-body bg-light text-center p-5">
          <h2 class="fw-bolder text-primary text-uppercase mb-4">
            <i class="bi bi-rocket-takeoff-fill me-2"></i>¿Listo para comenzar?
          </h2>
          <p class="lead text-muted mb-4">
            Explora nuestras series disponibles y descubre todos los personajes
          </p>
          <div class="d-flex justify-content-center gap-3 flex-wrap">
            <a
              class="btn btn-primary btn-lg fw-semibold shadow-sm px-5"
            >
              <i class="bi bi-journals me-2"></i>Ver Series
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Cards -->
    <section class="container my-5 mb-5">
      <div class="row g-3">
        <div class="col-sm-6 col-lg-3">
          <div
            class="card bg-primary text-light shadow-sm h-100"
            style="border-radius: 10px"
          >
            <div class="card-body text-center">
              <i class="bi bi-collection-fill fs-1 mb-2"></i>
              <h5 class="fw-bolder">Múltiples Series</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div
            class="card bg-primary text-light shadow-sm h-100"
            style="border-radius: 10px"
          >
            <div class="card-body text-center">
              <i class="bi bi-lightning-fill fs-1 mb-2"></i>
              <h5 class="fw-bolder">Rápido y Fácil</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div
            class="card bg-primary text-light shadow-sm h-100"
            style="border-radius: 10px"
          >
            <div class="card-body text-center">
              <i class="bi bi-palette-fill fs-1 mb-2"></i>
              <h5 class="fw-bolder">Diseño Moderno</h5>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div
            class="card bg-primary text-light shadow-sm h-100"
            style="border-radius: 10px"
          >
            <div class="card-body text-center">
              <i class="bi bi-shield-check fs-1 mb-2"></i>
              <h5 class="fw-bolder">Confiable</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
  border-bottom: 3px solid rgba(255, 255, 255, 0.2);
}

.home-container {
  min-height: 100vh;
  background-color: #f8f9fa;
}
</style>
