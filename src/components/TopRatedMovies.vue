<template>
<div class="topratedmovies">
    <h1 class="pt-5 font-weight-light">Les 50 films les mieux notés</h1>
    <SortButtons :movies="movies" @sort-movies="sortMovies"></SortButtons>
    <MoviesList :movies="movies" :loading="loading" errored="errored"></MoviesList>
</div>
</template>

<script>

import MoviesList from "./utils/MoviesList.vue";
import SortButtons from "./utils/SortButtons.vue";

export default {
    name: "TopRatedMovies",
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
    }
}

</script>