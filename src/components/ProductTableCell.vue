<template>
  <td :class="cellClass" :rowspan="rowSpanVal">
    {{ value }}
  </td>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'ProductInfoCell',
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
    },
  },
  setup(props) {
    const cellClass = computed(() => (props.isCoreColumn ? 'coreCell' : 'cell'));

    return {
      cellClass,
    };
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
