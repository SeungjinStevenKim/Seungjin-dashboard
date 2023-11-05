<template>
  <table>
    <ProductTableHeader />
    <ProductTableDetails />
  </table>

  <Pagination
    @changePage="changePage"
    :noOfItems="getNumberOfProducts"
    :currentPage="getCurrentPage"
    :itemsPerPage="getNumberOfItemsPerPage"
  />
</template>

<script>
import { computed } from 'vue';
import ProductTableHeader from './ProductTableHeader.vue';
import ProductTableDetails from './ProductTableDetails.vue';
import Pagination from './baseComponents/Pagination.vue';
import { useTableStore } from '../store/TableStore';

export default {
  components: { ProductTableHeader, ProductTableDetails, Pagination },

  setup() {
    const tableStore = useTableStore();
    
    const getNumberOfProducts = computed(() => tableStore.getFilteredProductLength);
    const getCurrentPage = computed(() => tableStore.getCurrentPage);
    const getNumberOfItemsPerPage = computed(() => tableStore.getNumberOfItemsPerPage);

    const changePage = (page) => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      tableStore.setCurrentPage(page);
    };

    return {
      getNumberOfProducts,
      getCurrentPage,
      getNumberOfItemsPerPage,
      changePage,
    };
  },
};
</script>
