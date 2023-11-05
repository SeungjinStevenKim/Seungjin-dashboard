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
import FilteringColumnsSelect from './FilteringColumnsSelect.vue';
import HideByStatusBar from './HideByStatusBar.vue';
import ProductInputFilter from './ProductInputFilter.vue';

export default {
  components: {
    ProductInputFilter,
    HideByStatusBar,
    FilteringColumnsSelect,
  },
};
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
