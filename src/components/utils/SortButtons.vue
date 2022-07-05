<template>
    <div>
        <button class="btn mb-2" @click="sortByNote">Trier par note</button>
        <button class="btn mb-2" @click="sortByDate">Trier par date</button>
        <button class="btn mb-2" @click="sortByTitle">Trier par titre</button>
    </div>
</template>

<script>

export default {
    name: "SortButtons",
    props: [
        'movies'
    ],

    data() {
        return {
            sortNoteDESC: false,
            sortDateDESC: false,
            sortTitleDESC: false
        }
    },
    methods: {
        sortByNote() {
            let movielist = this.movies;
            if (this.sortNoteDESC == false) {
                movielist.sort(function sortArray(movie1, movie2) {
                    if (movie1.vote_average > movie2.vote_average) {
                        return -1
                    }
                    if (movie1.vote_average < movie2.vote_average) {
                        return 1
                    }
                    return 0
                })
                return this.sortNoteDESC = true
            }
            if (this.sortNoteDESC == true) {
                movielist.sort(function sortArray(movie1, movie2) {
                    if (movie1.vote_average < movie2.vote_average) {
                        return -1
                    }
                    if (movie1.vote_average > movie2.vote_average) {
                        return 1
                    }
                    return 0
                })
                return this.sortNoteDESC = false
            }
        },
        sortByDate() {
            let movielist = this.movies
            if (this.sortDateDESC == false) {
                movielist.sort(function sortArray(movie1, movie2) {
                    if (movie1.release_date > movie2.release_date) {
                        return -1
                    }
                    if (movie1.release_date < movie2.release_date) {
                        return 1
                    }
                    return 0
                })
                return this.sortDateDESC = true
            }
            if (this.sortDateDESC == true) {
                movielist.sort(function sortArray(movie1, movie2) {
                    if (movie1.release_date < movie2.release_date) {
                        return -1
                    }
                    if (movie1.release_date > movie2.release_date) {
                        return 1
                    }
                    return 0
                })
                return this.sortDateDESC = false
            }
        },
        sortByTitle() {
            let movielist = this.movies
            if (this.sortTitleDESC == false) {
                movielist.sort(function sortArray(movie1, movie2) {
                    if (movie1.title > movie2.title) {
                        return -1
                    }
                    if (movie1.title < movie2.title) {
                        return 1
                    }
                    return 0
                })
                return this.sortTitleDESC = true
            }
            if (this.sortTitleDESC == true) {
                movielist.sort(function sortArray(movie1, movie2) {
                    if (movie1.title < movie2.title) {
                        return -1
                    }
                    if (movie1.title > movie2.title) {
                        return 1
                    }
                    return 0
                })
                return this.sortTitleDESC = false
                
            }
        }
    }
}
</script>

<style>
.btn {
    background-color: #ED1C24;
    color: #fff;
    margin-left: 20px;
    margin-right: 20px;
}
</style>

<!--

    - movies passage en tant que props <SortButton :movies="movies" />
    - 3 boutons pour chacun un tri -> tri doit marcher dans les 2 sens -> DESC / ASC
    - 1 fonction par bouton dans les méthodes
    - utilisation de la syntaxe "emit" pour faire remonter les films trier vers le parent
        - surveiller l'évènement
        - récupère les films trier qui vont remplace movies dans data

-->