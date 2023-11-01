<template>
    <StatusBar/>
    <table>
      <TableHeader/>
      <TableProductDetails/>
    </table>
</template>


<script>
import StatusBar from '../components/StatusBar.vue';
import TableHeader from '../components/TableHeader.vue';
import TableProductDetails from '../components/TableProductDetails.vue';

export default {
    components: { StatusBar, TableHeader, TableProductDetails },
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