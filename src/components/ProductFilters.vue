<template>
    <div class="filters-container">
      <HideByStatusBar />
      <ProductInputFilter />
    </div>

</template>

<script>
import { useTableStore }  from '../store/TableStore';
import HideByStatusBar from './HideByStatusBar.vue';
import ProductInputFilter from './ProductInputFilter.vue';

export default {
  components: { ProductInputFilter,
                HideByStatusBar },

  setup() {
    const tableStore = useTableStore()

    return { tableStore }
  },


  computed: {
    getStatuses() {
      return this.tableStore.getStatusesForAllProducts
    },
  },

}
</script>


<style scoped>

.filters-container {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    column-gap: 30px;
}

</style>


