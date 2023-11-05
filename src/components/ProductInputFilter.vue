<template>
    <InputField @valueEntered = "updateFilteringKey"
                @valueUpdated = "updateKeyIfEmpty"
                label="Enter values that you want to search"
                id="Enter values that you want to search"
    />
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
    updateFilteringKey(key) {
        this.tableStore.setfilteringKey(key);
        this.tableStore.setCurrentPage(1);
    },
    updateKeyIfEmpty(key) {
        if(typeof key === "string" && key.length === 0) {
            this.tableStore.setfilteringKey(key);
            this.tableStore.setCurrentPage(1);
        }
    }
  }
  
};
</script>
