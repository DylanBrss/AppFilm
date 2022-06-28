<template>
    <div class="container">
        <div class="card p-3 my-3 " style="width: 18rem;">
            <h5 class="title fw-bold fst-italic text-white">{{ title }}</h5>
            <img v-bind:src="preUrl + poster_path" alt="moviePoster" />
            <div class="card-body">
                <p class="sorti text-white"><b>Sortie :</b> {{ release_date }}</p>
                <p class="notemoy text-white"><b>Note moyenne :</b> {{ vote_average }}</p>
                <p class="resum text-white"><b>Résumé :</b> {{ overview.substring(0, 200) + "..."  }}</p>
            </div>
        </div>
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
            movies: null,
            loading: true,
            errored: false,
            preUrl: "https://image.tmdb.org/t/p/original/",
        };
    },

}
</script>
<style>
.card{
    border: 1px solid;
    background-color: #334;
    height: 95%;
}

</style>