<template>
    <div>
        <button type="button" class="btn m-2" @click="SortByNote(sortbynote)">Trier par note</button>
        <button type="button" class="btn mb-2">Trier par date</button>
        <button type="button" class="btn mb-2">Trier par titre</button>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "SortButtons",
    data() {
        return {
            sortbynote: null,
            sortbydate: null,
            sortbytitle: null,
            movies: null,
        };
    },
    methods: {
        SortByNote(sortbynote) {
            this.movies = sortbynote
            axios
                .get("https://api.themoviedb.org/3/discover/movie?api_key=8d2265a50d4907bf6dd28e4ad308b47e&language=fr&include_adult=false&vote_count.gte=1000&")
                .then(response => {
                    this.movies = response.data.results;
                });
        },

        SortByDate(sortbydate) {
            this.movies = sortbydate
        },

        SortByTitle(sortbytitle) {
            this.movies = sortbytitle
        }
    }
}
</script>

<style>
.btn {
    background-color: #334;
    color: #fff;
    margin-left: 20px;
    margin-right: 20px;
}
</style>