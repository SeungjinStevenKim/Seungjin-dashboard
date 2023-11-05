<template>
    <InputField @valueEntered = "updateFilteringKey"
                @valueUpdated = "updateKeyIfEmpty"
                label="Type the value that you want to search and Press enter"
                id="Type the value that you want to search and Press enter"
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
