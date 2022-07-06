<template>
    <div class="container-fluid mb-4">
        <div class="row">
            <h2 class="title text-center text-uppercase mt-5"><b>{{ movie.title }}</b></h2>
            <h5 class="fst-italic mb-5" v-if="movie.tagline != '' "> "{{ movie.tagline }}"</h5>
            <div class="col-lg-6 col-md-12 col-sm-12 m-auto image">
                <img v-bind:src="preUrlImg + movie.poster_path" alt="moviePoster" id="MoviePoster" />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 m-auto description">
                <div class="mt-5" id="trailer" v-if="video[0]">
                    <h4 class="text-lg-start text-md-center fs-6"><b>Regarder la bande annonce :</b></h4>
                    <iframe width="650" height="300" v-bind:src="'https://www.youtube.com/embed/' + video[0].key"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen class="shadow">
                    </iframe>
                </div>
                <h4 class="text-lg-start text-md-center fs-6 py-1"><b>Date de sortie :</b> {{ movie.release_date }}</h4>
                <h4 class="text-lg-start text-md-center fs-6 py-1"><b>Genres : </b><span v-for="genresN in movie.genres" v-bind:key="genresN.id"> {{ genresN.name }},&nbsp;</span></h4>
                <h4 class="text-lg-start text-md-center fs-6 py-1"><b>Durée du film :</b> {{ movie.runtime }} minutes</h4>
                <h4 class="text-lg-start text-md-center fs-6 py-1"><b>Note :</b> {{ movie.vote_average }}/10</h4>
                <h4 class="text-lg-start text-md-center fs-6 py-1"><b>Titre original :</b> {{ movie.original_title }}</h4>
                <h4 class="text-lg-start text-md-center fs-6 text-uppercase py-1"><b class="text-capitalize">Langue <span class="text-lowercase">o</span>riginal :</b> {{ movie.original_language }}</h4>
                <h4 class="text-lg-start text-md-center fs-6 py-1"><b>Résumé :</b><br>{{ movie.overview }}</h4>
                <h4 class="text-lg-start text-md-center fs-6 py-1"><b>Productions : </b><br><span v-for="Prod in movie.production_companies" v-bind:key="Prod.id"> {{ Prod.name }},&nbsp;</span></h4>
                <h4 class="text-lg-start text-md-center fs-6 py-1" v-if="movie.budget != 0"><b>Budget :</b> {{ movie.budget }}<b>$</b></h4>
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
            video: [],
            loading: true,
            errored: false,
            preUrlImg: "https://image.tmdb.org/t/p/original/",
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
        axios
            .get("https://api.themoviedb.org/3/movie/" + this.movieId + "/videos?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr")
            .then((response) => {
                this.video = response.data.results;
                // console.log(this.video);
            })
    },
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}

#MoviePoster {
    height: 800px;
    width: 600px;
}

.title {
    font-family: 'Yellowtail', cursive;
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    #MoviePoster {
        height: 600px;
        width: 400px;
    }
}

@media screen and (max-width: 767px) {
    #MoviePoster {
        height: 400px;
        width: 300px;
    }

    h4{
        text-align: center;
    }

    iframe{
        height: 200px;
        width: 300px;
    }
}
</style>