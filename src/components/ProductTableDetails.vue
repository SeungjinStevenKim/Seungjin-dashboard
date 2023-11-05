<template>
  <tbody>
    <template v-for="(data, status, index) in getFilteredProductsByPage" :key="index">
      <!-- Status -->
      <tr :style="{ backgroundColor: statusColor[status] }">
        <ProductTableCell :value="status" :rowSpanVal="calstatusRowspan(data)" />
      </tr>

      <template v-for="cores in Object.keys(data)">
        <tr :style="{ backgroundColor: statusColor[status] }">
          <ProductTableCell :value="cores" :rowSpanVal="Object.keys(data[cores]).length + 1" :isCoreColumn="true" />
        </tr>

        <tr v-for="(v, k) in data[cores]" :key="k" :style="{ backgroundColor: statusColor[status] }">
          <!-- Product -->
          <ProductTableCell :isProductColumn="true" :value="v.Product" />
          <!-- Lithography -->
          <ProductTableCell :value="v.Lithography" />
          <!-- Threads -->
          <ProductTableCell :value="v.Threads" />
          <!-- Base_Freq -->
          <ProductTableCell :value="v.Base_Freq" />
          <!-- Max_Turbo_Freq -->
          <ProductTableCell :value="v.Max_Turbo_Freq" />
        </tr>
      </template>
    </template>
  </tbody>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useTableStore } from '../store/TableStore';
import { colorGenerator } from '../utils/colorGenerator';
import ProductTableCell from './ProductTableCell.vue';

export default {
  components: {
    ProductTableCell,
  },
  setup() {
    const tableStore = useTableStore();
    const statusColor = ref({});
    const getStatuses = computed(() => tableStore.getStatusesForAllProducts);

    onMounted(() => {
      for (const status in getStatuses.value) {
        const color = colorGenerator(getStatuses.value[status]);
        statusColor.value[getStatuses.value[status]] = color;
      }
    });

    const getFilteredProductsByPage = computed(() => tableStore.getFilteredProductsByPage);

    const calstatusRowspan = (data) => {
      let sum = Object.keys(data).length + 1;
      for (const cores in data) {
        sum += Object.keys(data[cores]).length;
      }
      return sum;
    };

    return {
      statusColor,
      getFilteredProductsByPage,
      calstatusRowspan,
    };
  },
};
</script>

<style scoped>
.width1 {
  width: 1%;
}
.width2 {
  width: 2%;
}
</style>
