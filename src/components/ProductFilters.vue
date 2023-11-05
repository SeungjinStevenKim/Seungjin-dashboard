<template>
    <div class="productFilterLayout">
      <HideByStatusBar />
      <div class="filterContainer">
        <FilteringColumnsSelect />
        <ProductInputFilter />
      </div>

    </div>

</template>

<script>
import { useTableStore }  from '../store/TableStore';
import FilteringColumnsSelect from './FilteringColumnsSelect.vue';
import HideByStatusBar from './HideByStatusBar.vue';
import ProductInputFilter from './ProductInputFilter.vue';

export default {
  components: { ProductInputFilter,
                HideByStatusBar,
                FilteringColumnsSelect 
              },

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

.productFilterLayout {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
}

.filterContainer {
    display: flex;
    width: 700px;
    column-gap: 20px;
}

</style>


