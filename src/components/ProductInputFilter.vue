<template>
    <InputField @filterUpdated = "filteringKeyUpdated" label="Search" id="Search"/>
</template>

<script>
import InputField from './baseComponents/InputField.vue';
import { useTableStore }  from '../store/TableStore';


export default {
    components: {
        InputField
    },
    setup() {
        const tableStore = useTableStore()

        return { tableStore }
  },

  methods: {
    filteringKeyUpdated(key) {
        this.tableStore.setfilteringKey(key);
        this.tableStore.setCurrentPage(1);
    }
  }
  
};
</script>


<style>



</style>