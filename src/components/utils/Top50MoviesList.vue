<template>
    <div>
        <ul>
            <li class="list-unstyled" v-for="movie in movies" :key="movie.id">
                <MovieCard>
                    :id="movie.id"
                    :title="movie.title"
                    :poster_path="movie.poster_path",
                    :release_date="movie.release_date"
                    :vote_average="movie.vote_average"
                    :overview="movie.overview"
                </MovieCard>
            </li>
        </ul>
    </div>
</template>

<script>
import MovieCard from './MovieCard.vue'

export default {
    name: "Top50MoviesList",
    components: {
        MovieCard,
    }
}
</script>