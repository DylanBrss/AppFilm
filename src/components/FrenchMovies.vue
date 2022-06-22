<template>
<div class="frenchmovies">
    <h1 class="pt-5 font-weight-light">Films français</h1>
    <SortButtons :movies="movies" @sort-movies="sortMovies"></SortButtons>
    <MoviesList :movies="movies" :loading="loading" errored="errored"></MoviesList>
</div>
</template>

<script>

import MoviesList from "./utils/MoviesList.vue";
import SortButtons from "./utils/SortButtons.vue";

export default {
    name: "FrenchMovies",
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
}

</script>