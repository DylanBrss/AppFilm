<template>
  <div class="americanmovies">
    <h1 class="title pt-5 fw-bold">Films américain</h1>
    <SortButtons :movies="movies"></SortButtons>
    <MoviesList :movies="movies" :loading="loading" errored="errored"></MoviesList>
  </div>
</template>

<script>

import MoviesList from "./utils/MoviesList.vue";
import SortButtons from "./utils/SortButtons.vue";
import axios from "axios";

export default {
  name: "AmericanMovies",
  components: {
    MoviesList,
    SortButtons
  },
  data() {
    return {
      movies: null,
      loading: true,
      errored: false,
    };
  },
  methode: {
    sortMovies(movie){
      this.movies = movie
    }
  },
  created() {
    axios
      .get("https://api.themoviedb.org/3/discover/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&include_adult=false&vote_count.gte=1000&with_original_language=en&page=1")
      .then(firstAPIresponse => {
        this.movies = firstAPIresponse.data.results;
      }),
      axios
        .get("https://api.themoviedb.org/3/discover/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&include_adult=false&vote_count.gte=1000&with_original_language=en&page=2")
        .then(secondAPIresponse => {
          secondAPIresponse.data.results.forEach(movie => {
            this.movies.push(movie)
          })
        })
  }
}

</script>