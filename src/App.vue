<template>
  <div id="app">
    <h1 class="topTitle">vue js movies</h1>
    <HeaderNav />

    <div class="container">
      <div v-if="$route.path == '/'">
        <!-- si la route est / (racine du site) -->
        <h1 class="pt-5 font-weight-light">
          Vos films préférés sont sur VueJS Movies !
        </h1>
        <MoviesList :movies="movies" :loading="loading" :errored="errored" />
      </div>

      <div v-else>
        <!-- si la route est différente de / -->
        <router-view v-bind:key="$route.fullPath"></router-view>
      </div>
    </div>
    <FooterApp />
  </div>
</template>

<script>
import HeaderNav from './components/template/HeaderNav.vue'
import FooterApp from './components/template/FooterApp.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterApp,
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

.topTitle{
  font-family: 'Rubik Moonrocks', cursive;
  text-transform: uppercase;
  font-size: 70px;
  letter-spacing: 40px;
  word-spacing: 70px;
  padding-bottom: 20px;
}

</style>
