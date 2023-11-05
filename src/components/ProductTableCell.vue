<template>
    <!-- Base Freq -->
    <td :class="isCoreColumn ? 'coreCell' : 'cell' " :rowspan="rowSpanVal">
        {{value}}
    </td>
</template>

<script>
export default {
  name: "ProductInfoCell",
  props: {
    value: {
      required: true,
    },
    isCoreColumn: {
      type: Boolean,
      default: false,
    },
    rowSpanVal: {
      type: Number,
    }
  },
};

</script>

<style scoped>
.cell {
  width: 5%;
}

.coreCell {
  width: 1%;
}
</style>


