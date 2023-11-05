<template>
    <Multiselect
      :options="options"
      mode="tags"
      :searchable="true"
      :create-option="true"
      placeholder="Select columns you want to search for"
      @change="this.onChange"
      />
</template>

<script>
  import Multiselect from '@vueform/multiselect'
  import { TABLE_COLUMNS } from '../constants';
  import { useTableStore } from '../store/TableStore';

  export default {
    components: {
      Multiselect,
    },
    setup() {
      const tableStore = useTableStore()
  
    return { tableStore }
  },


    data() {
      return {
        value: null,
        options: TABLE_COLUMNS
      }
    },
    methods:{
      onChange(columns) {
        this.tableStore.setFilteringSelectedColumns(columns)
      }
    }
  }
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
