<template>
    <div class="search p-5">
        <h1 class="p-5">Rechercher un film</h1>
        <input class="mb-5" type="text" v-model="query" @keyup="getSearch(query)" />
        <SortButtons :movies="movies" @sort-movies="sortMovies" />
    </div>
    <MoviesList :movies="movies" :loading="loading" :errored="errored" />
</template>

<script>
import MoviesList from "./utils/MoviesList.vue";
import axios from "axios";
import SortButtons from "./utils/SortButtons.vue";

export default {
    name: "SearchMovies",
    components: {
        MoviesList,
        SortButtons
    },
    data() {
        return {
            query: "",
            movies: []
        };
    },
    methods: {
        /* méthode qui récupère les films*/
        sortMovies(movies) {
            this.moviess = movies
        },

        /* fonction qui affiche les films rechercher avec la value demander */
        getSearch(query) {
            axios
                .get("https://api.themoviedb.org/3/search/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&include_adult=false&query=" + query)
                .then((response) => {
                    this.movies = response.data.results;
                });
        },
    },
};
</script>

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>