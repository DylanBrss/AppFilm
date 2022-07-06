<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link to="/" id="home">Accueil</router-link>
                    <router-link to="/frenchmovies">Films français</router-link>
                    <router-link to="/americanmovies">Films américains</router-link>
                    <router-link to="/lastmovies">Films sortis en 2022</router-link>
                    <router-link to="/top50movies">Les 50 films les mieux notés</router-link>
                    <router-link to="/searchmovies">Rechercher un film</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: "HeaderNav",
}

</script>

<style scoped>
nav {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #334;
    padding: 20px 0;
}

#navbarNavAltMarkup {
    padding: 0 50px;
}

a {
    font-size: 20px;
    text-decoration: none;
    margin: 0 50px;
    color: #fff;
    font-family: 'Yellowtail', cursive;
}

a:hover {
    color: #ED1C24;

}
</style>