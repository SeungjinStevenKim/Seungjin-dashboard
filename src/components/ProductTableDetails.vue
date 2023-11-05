<template>
    <tbody>
        <template v-for="(data, status, index) in getFilteredProductsByPage" :key="index">
          <!-- status -->
          <tr :style="{backgroundColor: statusColor[status] }">
            <ProductTableCell :value="status" :rowSpanVal="calstatusRowspan(data)" />
          </tr>

          <template v-for="cores in Object.keys(data)">
            <tr :style="{backgroundColor: statusColor[status] }">
              <ProductTableCell :value="cores" :rowSpanVal="Object.keys(data[cores]).length + 1" :isCoreColumn ='true' />
            </tr>

            <tr v-for="(v, k) in data[cores] " :key="k" :style="{backgroundColor: statusColor[status] }">
              <!-- product -->
              <ProductTableCell :isProductColumn="true" :value="v.Product" />
              <!-- Lithography -->
              <ProductTableCell :value="v.Lithography"/>
              <!-- Threads -->
              <ProductTableCell :value="v.Threads"/>
              <!-- Base_Freq -->
              <ProductTableCell :value="v.Base_Freq"/>
              <!-- Max_Turbo_Freq -->
              <ProductTableCell :value="v.Max_Turbo_Freq"/>
            </tr>
          </template>
        </template>
      </tbody>
</template>


<script>
import { useTableStore }  from '../store/TableStore';
import { colorGenerator } from '../utils/colorGenerator';
import ProductTableCell from './ProductTableCell.vue';

export default {
  components:{
    ProductTableCell
  },
  data: function () {
    return {
      statusColor: {},
      tableStore : useTableStore(),
    };
  },
  mounted() {
    for (const status in  this.getStatuses) {
      var color = colorGenerator(this.getStatuses[status])
      this.statusColor[this.getStatuses[status]] = color
    }
  },

  computed: {
    getFilteredProductsByPage() {
      return this.tableStore.getFilteredProductsByPage
    },
    getStatuses() {
      return this.tableStore.getStatusesForAllProducts
    },
    getCurrentPage() {
      return this.tableStore.getCurrentPage
    }
  },

  methods: {
        calstatusRowspan(data) {
      let sum = Object.keys(data).length + 1;
      for (const cores in data) {
        sum += Object.keys(data[cores]).length;
      }
      return sum;
    },
  }
}

</script>


<style scoped>

.width1 {
  width: 1%;
}
.width2 {
  width: 2%;
}




</style>