import { createApp } from "vue";
import { createWebHashHistory, createRouter } from "vue-router";
import App from "./App.vue"

// on importe les différents composants
import AmericanMovies from "./components/AmericanMovies.vue";
import FrenchMovies from "./components/FrenchMovies.vue";
import Top50Movies from "./components/Top50Movies.vue";
import LastMovies from "./components/LastMovies.vue";
import SearchMovies from "./components/SearchMovies.vue";
import MoviesDetails from "./components/MoviesDetails.vue";

// on déclare les routes
const routes = [
  // path = url
  {
    path: '/', component: App  /* composant associé */
  },
  { path: '/AmericanMovies', component: AmericanMovies },
  { path: '/FrenchMovies', component: FrenchMovies },
  { path: '/Top50Movies', component: Top50Movies },
  { path: '/LastMovies', component: LastMovies },
  { path: '/SearchMovies', component: SearchMovies },
  { path: '/MoviesDetails/:id', name: MoviesDetails, component: MoviesDetails}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount('#app')