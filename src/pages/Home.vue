<template>
    <div class="home">
        Home
    </div>
</template>


<script>
import Data from "../assets/data.json";

export default {
    components: {},

    mounted() {
        this.UIData = Data;
    },

}
</script>