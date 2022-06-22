<template>
    <div class="container">
        <div class="Moviescard" v-for="movie in movies" v-bind:key="movie.id" style="width: 18rem;">
            <p class="id">{{ movie.id }}</p>
            <h5 class="title">{{ movie.title }}</h5>
            <div class="card-body">
                <p class="img">{{ movie.poster_path }}</p>
                <p class="sorti">Sortie : {{ movie.release_date }}</p>
                <p class="notemoy">Note moyenne : {{ movie.vote_average }}</p>
                <p class="resum">Résumé : {{ movie.overview }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

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
            movie: null,
        };
    },
    created: function () {
        axios
            .get('https://api.themoviedb.org/3/movie/550?api_key=8d2265a50d4907bf6dd28e4ad308b47e')
            .then(res => {
                this.movie = res.data;
            })
    }
}
</script>