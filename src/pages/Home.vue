<template>
  <div class="layout">
    <ProductFilters/>
    <ProductTable/>
  </div>

</template>


<script>
import ProductTable from '../components/ProductTable.vue';
import ProductFilters from '../components/ProductFilters.vue';

export default {
    components: { ProductFilters, ProductTable}
}
</script>

<style>

.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
}

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