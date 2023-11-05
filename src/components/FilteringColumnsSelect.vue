<template>
  <Multiselect
      :options="options"
      mode="tags"
      :searchable="true"
      :create-option="true"
      placeholder="Select columns you want to search for"
      @change="onChange"
  />
</template>

<script>
import Multiselect from '@vueform/multiselect'
import { TABLE_COLUMNS } from '../constants';
import { useTableStore } from '../store/TableStore';
import { ref } from 'vue';

export default {
  components: {
    Multiselect,
  },
  setup() {
    const tableStore = useTableStore();
    const options = ref(TABLE_COLUMNS);

    const onChange = (columns) => {
      tableStore.setFilteringSelectedColumns(columns);
    };

    return {
      options,
      onChange,
    };
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
