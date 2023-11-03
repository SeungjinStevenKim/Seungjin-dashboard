<template>
    <table>
      <ProductTableHeader/>
      <ProductTableDetails/>
    </table>

    <div class="pagination-outter-container">
        <Pagination @changePage="changePage" :noOfItems="getNumberOfProducts" :currentPage="getCurrentPage" />
    </div>

</template>


<script>
import ProductTableHeader from './ProductTableHeader.vue';
import ProductTableDetails from './ProductTableDetails.vue';
import Pagination from './Pagination.vue';
import { useTableStore }  from '../store/TableStore';


export default {
    components: { ProductTableHeader, ProductTableDetails, Pagination},

    methods: {
        changePage(page) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            this.tableStore.setCurrentPage(page);
        }
    },

    data: function () {
        return {
            statusColor: {},
            tableStore : useTableStore(),
        };
    },

    computed: {
        getNumberOfProducts() {
          return this.tableStore.getFilteredProductLength
        },
        getCurrentPage() {
          return this.tableStore.getCurrentPage
        }
  },

}
</script>

<style scoped>

.pagination-outter-container {
    display: flex;
    flex-direction: row-reverse;
}

</style>>


