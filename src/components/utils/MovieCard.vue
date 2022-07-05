<template>
    <div class="container">
        <router-link :to="`/MoviesDetails/${id}`" id="moviesdetails">
            <div class="card p-1 my-3 ">
                <h5 class="title fw-bold text-white">{{ title }}</h5>
                <img v-bind:src="preUrl + poster_path" alt="moviePoster" />
                <div class="card-body">
                    <p class="sorti text-white"><b>Sortie :</b> {{ release_date }}</p>
                    <p class="notemoy text-white"><b>Note moyenne :</b> {{ vote_average }}</p>
                    <p class="resum text-white"><b>Résumé :</b> {{ overview.substring(0, 200) + "..." }}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "MovieCard",
    props: [
        "id",
        "title",
        "release_date",
        "vote_average",
        "overview",
        "poster_path",
    ],
    data() {
        return {
            movies: [],
            loading: true,
            errored: false,
            preUrl: "https://image.tmdb.org/t/p/original/",
        };
    },

}
</script>
<style>
a {
    text-decoration: none;
}

.card {
    border: 1px solid #334;
    background-color: #334;
    height: 95%;
    text-align: left;
    width: 18rem;
}
</style>