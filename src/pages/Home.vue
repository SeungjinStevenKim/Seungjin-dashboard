<template>
    <StatusBar :statuses="productDataBystatus.status"/>
    <table>
      <TableHeader/>
    </table>
</template>


<script>
import Data from "../assets/data.json";
import StatusBar from '../components/StatusBar.vue';
import Table from '../components/table.vue';
import TableHeader from '../components/TableHeader.vue';

export default {
    components: { StatusBar, TableHeader, Table },

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

<style>

table {
  width: 100%;
  white-space: nowrap !important;
}

table td {
  position: relative;
}

i {
  cursor: pointer;
}

table tr td:not(.skip),
table tr th {
  text-align: center;
}

td,
th {
  padding: 2px !important;
  width: 100px;
  border: 1px solid black;

}

.width1 {
  width: 1%;
  /* white-space: nowrap !important; */
}


</style>