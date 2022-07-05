<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">

            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <router-link to="/" id="home">Accueil</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/frenchmovies">Films français</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/americanmovies">Films américains</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/lastmovies">Films sortis en 2022</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/top50movies">Les 50 films les mieux notés</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/searchmovies">Rechercher un film</router-link>
                    </li>
                </ul>
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
    background-color: #334;
    padding: 20px 0;
}

#navbarNav {
    display: flex;
    justify-content: center;
}

a {
    font-size: 20px;
    text-decoration: none;
    margin: 50px;
    color: #fff;
    font-family: 'Yellowtail', cursive;
}

a:hover {
    color: #ED1C24;

}
</style>