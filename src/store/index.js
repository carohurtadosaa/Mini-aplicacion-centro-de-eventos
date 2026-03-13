import { createStore } from 'vuex';
import auth from './modules/auth';
import frameworks from './modules/frameworks';

const store = createStore({
  modules: {
    auth,
    frameworks
  }
});

export default store;
