<template>
  <div id="app">
    <h1 class="topTitle">Cinérama</h1>
    <HeaderNav />

    <div class="container">
      <div v-if="$route.path == '/'">
        <!-- si la route est / (racine du site) -->
        <h1 class="title pt-5 font-weight-light">
          Vos films préférés sont sur CinéRama !
        </h1>
        <MoviesList :movies="movies" :loading="loading" :errored="errored" />
      </div>
      <div v-else>
        <!-- si la route est différente de / -->
        <router-view v-bind:key="$route.fullPath"></router-view>
      </div>
    </div>
    <FooterApp />
  </div>
</template>

<script>
import HeaderNav from './components/template/HeaderNav.vue'
import MoviesList from './components/utils/MoviesList.vue'
import FooterApp from './components/template/FooterApp.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HeaderNav,
    MoviesList,
    FooterApp,
  },
  data() {
    return {
      movies: [],
      loading: true,
      errored: false,
    }
  },
  created() {
    axios
      .get("https://api.themoviedb.org/3/discover/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&sort_by=popularity.desc&include_adult=false&vote_count.gte=1000&page=1")
      .then(firstAPIresponse => {
        this.movies = firstAPIresponse.data.results;
        // console.log(this.movies)
      }),
      axios
        .get("https://api.themoviedb.org/3/discover/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&sort_by=popularity.desc&include_adult=false&vote_count.gte=1000&page=2")
        .then(secondAPIresponse => {
          secondAPIresponse.data.results.forEach(movie => {
            this.movies.push(movie)
          })
          // console.log(this.movies)
        })
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

.topTitle {
  font-family: 'Monoton', cursive;
  text-transform: uppercase;
  font-size: 70px;
  letter-spacing: 40px;
  word-spacing: 70px;
  padding-bottom: 20px;
  color: #ED1C24;
}

@media screen and (max-width: 768px) {
  .topTitle {
    font-size: 42px;
    letter-spacing: 10px;
    word-spacing: 20px;
  }
}
</style>