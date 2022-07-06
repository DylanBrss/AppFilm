<template>
    <div class="to50movies">
        <h1 class="title pt-5 fw-bold">Les 50 films les mieux notés</h1>
        <SortButtons :movies="movies" />
        <MoviesList :movies="movies" :loading="loading" errored="errored" />
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
            movies: [],
            loading: true,
            errored: false,
        };
    },
    created() {
        axios
            .get("https://api.themoviedb.org/3/discover/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&include_adult=false&sort_by=vote_average.desc&vote_count.gte=1000&page=1")
            .then(firstAPIresponse => {
                this.movies = firstAPIresponse.data.results;
            }),
            axios
                .get("https://api.themoviedb.org/3/discover/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&include_adult=false&sort_by=vote_average.desc&vote_count.gte=1000&page=2")
                .then(secondAPIresponse => {
                    secondAPIresponse.data.results.forEach(movie => {   
                        this.movies.push(movie)
                    })
                }),
            axios
                .get("https://api.themoviedb.org/3/discover/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&include_adult=false&sort_by=vote_average.desc&vote_count.gte=1000&page=3")
                .then(thirdAPIresponse => {
                    thirdAPIresponse.data.results.forEach(movie => {

                        this.movies.push(movie)
                    })
                    /* pour avoir que 10 résultat on supprimer les 10 derniers*/
                    this.movies.splice(10, 10)
                })
    }
}

</script>