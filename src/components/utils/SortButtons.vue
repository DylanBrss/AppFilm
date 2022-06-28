<template>
    <div>
        <button type="button" class="btn">Trier par note</button>
        <button type="button" class="btn">Trier par date</button>
        <button type="button" class="btn">Trier par titre</button>

    </div>
</template>

<script>

export default {
    name: "SortButtons",
    data() {
        return {
            sortbynote: "",
            sortbydate: "",
            sortbytitle: "",
            movies: null,
        };
    },
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