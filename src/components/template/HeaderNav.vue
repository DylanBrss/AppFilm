<template>
    <header class="HeaderNav">
        <div id="nav">
            <router-link to="/" id="home">Accueil</router-link>
            <router-link to="/frenchmovies">Films français</router-link>
            <router-link to="/americanmovies">Films américains</router-link>
            <router-link to="/lastmovies">Films sortis en 2022</router-link>
            <router-link to="/top50movies">Les 50 films les mieux notés</router-link>
            <router-link to="/searchmovies">Rechercher un film</router-link>
        </div>
    </header>
</template>

<script>

export default {
    name: "HeaderNav",
}

</script>

<style scoped>
.HeaderNav {
    background-color: #334;
    color: #fff;
    text-align: center;
    padding: 20px;
    font-family: 'Yellowtail', cursive;
}

.HeaderNav #home {
    color: #fff;
}

.HeaderNav #home:hover {
    color: #ED1C24;
}

.HeaderNav a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
}

.HeaderNav a:hover {
    color: #ED1C24;
}

#nav {
    display: flex;
    justify-content: space-evenly;
}

@media screen and (min-width: 768px) and (max-width: 991px){
    .HeaderNav a{
        padding: 0 5px;
    }
}

@media screen and (max-width: 767px) {
    .HeaderNav #home {
        color: #fff;
    }

    .HeaderNav a {
        color: grey;
        text-decoration: none;
    }

    #nav {
        display: flex;
        flex-direction: column;
    }
}
</style>