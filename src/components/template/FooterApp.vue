<template>
    <footer class="FooterApp">
        <div class="foot">
            <p>Sur ce site vous pouvez trouver des millions de films et de séries TV.</p>
            <p>Explorer les différentes pages pour avoir accès à ce que vous préférer le plus !!!</p>
        </div>
    </footer>
</template>

<script>

export default {
    name: "FooterApp",
}

</script>

<style scoped>
.FooterApp {
    background-color: #334;
    color: #fff;
    text-align: center;
    padding: 20px;
    font-family: 'Yellowtail', cursive;
}

.foot{
    padding: 10px;
}

p:hover{
    color: grey;
}

</style>