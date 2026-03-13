<script>
export default {
  name: 'UserDashboard',
  computed: {
    // Datos del store
    frameworks() { return this.$store.state.frameworks.items; },
    loading() { return this.$store.state.frameworks.loading; },
    error() { return this.$store.state.frameworks.error; },
    user() { return this.$store.state.auth.user; }
  },
  mounted() {
    // Al montar, carga frameworks
    this.$store.dispatch('frameworks/cargar');
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<template>
  <div>
    <!-- Saludo al usuario -->
    <h2>Hola, {{ user?.name }}</h2>
    <button @click="logout">Salir</button>

    <!-- Lista de frameworks -->
    <h3>Frameworks disponibles</h3>
    <button @click="$store.dispatch('frameworks/cargar')">Actualizar lista</button>

    <div v-if="loading">Cargando...</div>
    <div v-if="error">Error: {{ error }}</div>

    <ul v-if="frameworks.length">
      <li v-for="fw in frameworks" :key="fw.id">
        {{ fw.name }} - {{ fw.language }} (v{{ fw.version }})
      </li>
    </ul>

    <div v-else>No hay frameworks cargados.</div>
  </div>
</template>
