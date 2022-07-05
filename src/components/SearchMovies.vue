<template>
    <div class="search p-5">
        <h1 class="title p-5 fw-bold">Rechercher un film</h1>
        <input class="mb-5" type="text" v-model="search" @keyup="getSearch(search)" />
        <SortButtons :movies="movies"/>
    </div>
    <MoviesList :movies="movies" :loading="loading" :errored="errored" />
</template>

<script>
import MoviesList from "./utils/MoviesList.vue";
import SortButtons from "./utils/SortButtons.vue";
import axios from "axios";

export default {
    name: "SearchMovies",
    components: {
        MoviesList,
        SortButtons
    },
    data() {
        return {
            movies: [],
            loading: true,
            errored: false,
        };
    },
    methods: {

        /* fonction qui affiche les films rechercher avec la value implémenter en paramètre */
        getSearch(search) {
            axios
                .get("https://api.themoviedb.org/3/search/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&include_adult=false&query=" + search)
                .then((response) => {
                    this.movies = response.data.results;
                });
        },
    },
};
</script>