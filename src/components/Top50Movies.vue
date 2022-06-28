<template>
    <div class="to50movies">
        <h1 class="pt-5 font-weight-light">Les 50 films les mieux notés</h1>
        <SortButtons :movies="movies" @sort-movies="sortMovies"></SortButtons>
        <MoviesList :movies="movies" :loading="loading" errored="errored"></MoviesList>
    </div>
</template>

<script>

import MoviesList from "./utils/MoviesList.vue";
import SortButtons from "./utils/SortButtons.vue";
import axios from "axios";

export default {
    name: "Top50Movies",
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
    created() {
        axios
            .get("https://api.themoviedb.org/3/discover/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&include_adult=false&vote_average.gte=8&vote_count.gte=1000&page=1")
            .then(firstAPIresponse => {
                this.movies = firstAPIresponse.data.results;
                console.log(this.movies)
            }),
            axios
                .get("https://api.themoviedb.org/3/discover/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&include_adult=false&vote_average.gte=8&vote_count.gte=1000&page=1")
                .then(secondAPIresponse => {
                    secondAPIresponse.data.results.forEach(movie => {
                        this.movies.push(movie)
                    })
                    console.log(this.movies)
                })
    }
}

</script>