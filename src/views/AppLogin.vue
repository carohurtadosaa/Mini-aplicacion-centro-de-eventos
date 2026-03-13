<template>
  <div class="login-container">
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="handleLogin">
      <label for="email">Correo</label>
      <input id="email" type="email" v-model="email" required />

      <label for="password">Contraseña</label>
      <input id="password" type="password" v-model="password" required />

      <button type="submit" :disabled="loading">
        {{ loading ? "Ingresando..." : "Entrar" }}
      </button>

      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "AppLogin",
  data() {
    return { email: "", password: "" };
  },
  computed: {
    ...mapState("auth", ["loading", "error"])
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async handleLogin() {
      await this.login({ email: this.email, password: this.password });
      if (!this.error) this.$router.push("/dashboard");
    }
  }
};
</script>
