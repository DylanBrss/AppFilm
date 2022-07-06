<template>
    <div class="container">

        <div class="card p-1 my-3 ">
            <h5 class="title fw-bold text-white"><span v-if="$route.path == '/top50movies'" ></span><span v-once>#{{ index +1}}</span> &nbsp; {{ title }}</h5>
            <p class="index fw-bold text-white text-start" ></p>
            <img v-bind:src="preUrl + poster_path" alt="moviePoster" />
            <div class="card-body">
                <p class="sorti text-white"><b>Sortie :</b> {{ release_date }}</p>
                <p class="notemoy text-white"><b>Note moyenne :</b> {{ vote_average }}</p>
                <p class="resum text-white"><b>Résumé :</b> {{ overview.substring(0, 199) + "..." }}</p>
                <router-link :to="`/MoviesDetails/${id}`" class="btn" id="moviesdetails">Plus de détails</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MovieCard",
    props: [
        "id",
        "index",
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
    text-align: center;
    width: 18rem;
}

img {
    height: 400px;
}

.btn {
    background-color: #ED1C24;
    color: #fff;
}

.btn:hover {
    background-color: #fff;
    color: #ED1C24;

}
</style>
            <!-- 
                - position des films avec index
                - tri qui doit pas changer l'index des films
            -->