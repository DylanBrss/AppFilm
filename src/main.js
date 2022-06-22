import { createRouter , createWebHistory} from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import FrenchMovies from './components/FrenchMovies.vue'
import AmericanMovies from './components/AmericanMovies.vue'
import LastMovies from './components/LastMovies.vue'
import MoviesDetails from './components/MoviesDetails.vue'
import SearchMovies from './components/SearchMovies.vue'
import TopRatedMovies from './components/TopRatedMovies.vue'

const routes = [
    { path: '/frenchmovies', name:'FrenchMoviesM', component: FrenchMovies },
    { path: '/americanmovies', name: 'AmericanMovies', component: AmericanMovies },
    { path: '/lastmovies', name: 'LastMovies', component: LastMovies },
    { path: '/moviesdetails', name: 'MoviesDetails', component: MoviesDetails },
    { path: '/searchmovies', name: 'SearchMovies', component: SearchMovies },
    { path: '/topratedmovies', name: 'TopRatedMovies', component: TopRatedMovies}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')