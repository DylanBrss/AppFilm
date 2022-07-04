<template>
    <div class="container-fluid m-4">
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 m-auto image">
                <img v-bind:src="preUrlImg + movie.poster_path" alt="moviePoster" id="MoviePoster" />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 m-auto description">
                <img v-bind:src="preUrlImg + movie.video" alt="movieVideo" id="MovieVideo" />
                <br>
                <h4 class="title text-center text-uppercase"><b>{{ movie.title }}</b></h4>
                <br>
                <h4 class="text-start fs-6"><b>Date de sortie :</b> {{ movie.release_date }}</h4>
                <br>
                <h4 class="text-start fs-6"><b>Note moyenne :</b> {{ movie.vote_average }}/10</h4>
                <br>
                <h4 class="text-start fs-6"><b>Titre original :</b> {{ movie.original_title }}</h4>
                <br>
                <h4 class="text-start fs-6 text-uppercase"><b class="text-capitalize">Langue :</b> {{ movie.original_language }}</h4>
                <br>
                <h4 class="text-start fs-6"><b>Résumé :</b> {{ movie.overview }}</h4>
                <br>
                <h4 class="text-start fs-6"><b>Budget :</b> {{ movie.budget }} <b>$</b></h4>
                <br>
                <h4 class="text-start fs-6"><b>Durée du film :</b> {{ movie.runtime }} minutes</h4>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "MoviesDetails",
    data() {
        return {
            movie: [],
            loading: true,
            errored: false,
            preUrlImg: "https://image.tmdb.org/t/p/original/",
            preUrlVideo: "https://video.tmdb.org/t/p/original",
            movieId: this.$route.params.id
        }
    },
    created() {
        axios
            .get("https://api.themoviedb.org/3/movie/" + this.movieId + "?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr")
            .then(response => {
                this.movie = response.data;
                console.log(this.movie)
            })
    }
}
</script>

<style>
#MoviePoster{
    height: 700px;
    width: 500px;
}

.title {
    font-family: 'Yellowtail', cursive;
}

 @media screen and (min-width: 768px) and (max-width: 991px) {
    #MoviePoster{
        height: 600px;
        width: 400px;
    }
 }

 @media screen and (max-width: 767px) {
    #MoviePoster{
        height: 400px;
        width: 300px;
    }
 }

</style>