<template>
    <StatusBar :statuses="productDataBystatus.status"/>
</template>


<script>
import Data from "../assets/data.json";
import StatusBar from '../components/StatusBar.vue';

export default {
    components: { StatusBar },

    data() {
        return {
            hidestatus: [],
            products: []
        }
    },

    mounted() {
        this.products = Data;
    },

    computed: {
      productDataBystatus() {
        let tmp = {};
        let data = this.products;
        let statusSet = new Set();

        data.forEach((element) => {
          let status = element.Status;
          let cores = element.Cores;

          // push status to set
          statusSet.add(status);

          if (this.hidestatus.includes(status)) return; // Hide by status
          if (!tmp[status]) tmp[status] = {};
          if (!tmp[status][cores]) tmp[status][cores] = [];

          tmp[status][cores].push(element);
        });

        // sort status in order
        const strings = new Set(statusSet);
        const sortedStringsArray = [...strings].sort();
        statusSet = new Set(sortedStringsArray);

        return {
          status: [...statusSet],
          data: tmp,
        };
    },

    }

}
</script>