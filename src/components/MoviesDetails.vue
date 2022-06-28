<template>
    <div class="col-md-5 m-auto align-self-center description bg-dark">
        <h1>{{film.title.toUpperCas()}}</h1>
        <br>
        <h4> {{ film.tagline }}</h4>
        <br>
        <div><strong>Date de sortie :</strong> {{film.release_date}}</div>
        <br>
        <h4>Synopsis :</h4>
        <br>
        <div>{{film.overview}}</div>
        <br>
        <p><strong>Casting :</strong></p>
        <div v-for="credit in credits" v-bind:key="credit.originla_name">
            <p v-if="credit.character"> {{ credit.original_name }} dans le rôle de {{credit.character}}</p>    
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "MoviesDetails",
    data() {
        return {
            credits: null
        };
    },
    created() {
        axios
            .get('https://api.themoviedb.org/3/movie/550?api_key=8d2265a50d4907bf6dd28e4ad308b47e&page=1')
            // ajouter &page=1 pour avoir la premier page
            .then((res => {
                this.credits = res.data;
            }));
    },
    
}
</script>