import api from '../../api/api';

export default {
  namespaced: true,
  state: () => ({
    items: [],
    loading: false,
    error: null
  }),
  mutations: {
    setItems(state, frameworks) { state.items = frameworks; },
    setLoading(state, status) { state.loading = status; },
    setError(state, error) { state.error = error; }
  },
  actions: {
    async cargar({ commit }) {
      commit('setLoading', true);
      commit('setError', null);
      try {
        // Simulación de datos en lugar de llamada a API
        const data = [
          { id: 1, name: 'Vue.js', language: 'JavaScript', version: '3.0' },
          { id: 2, name: 'React', language: 'JavaScript', version: '18' },
          { id: 3, name: 'Angular', language: 'TypeScript', version: '15' }
        ];
        commit('setItems', data);
      } catch (err) {
        commit('setError', err.message);
      } finally {
        commit('setLoading', false);
      }
    }
  }
};
