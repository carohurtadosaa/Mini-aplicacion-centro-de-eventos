export default {
  namespaced: true,
  state: () => ({
    user: null,
    loading: false,
    error: null
  }),
  mutations: {
    setUser(state, user) { state.user = user; },
    setLoading(state, status) { state.loading = status; },
    setError(state, error) { state.error = error; }
  },
  actions: {
    async login({ commit }, { email, password }) {
      commit('setLoading', true);
      commit('setError', null);
      try {
        // Simulación de llamada a API
        if (email && password) {
          commit('setUser', { name: 'Demo User', email });
        } else {
          throw new Error('Credenciales inválidas');
        }
      } catch (err) {
        commit('setError', err.message);
      } finally {
        commit('setLoading', false);
      }
    },
    logout({ commit }) {
      commit('setUser', null);
    }
  }
};
