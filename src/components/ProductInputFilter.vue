<template>
  <InputField
    @valueEntered="updateFilteringKey"
    @valueUpdated="updateKeyIfEmpty"
    label="Type the value that you want to search and Press enter"
    id="search-input"
  />
</template>

<script>
import InputField from './baseComponents/InputField.vue';
import { useTableStore } from '../store/TableStore';

export default {
  components: {
    InputField,
  },
  setup() {
    const tableStore = useTableStore();

    const updateFilteringKey = (key) => {
      tableStore.setfilteringKey(key);
      tableStore.setCurrentPage(1);
    };

    const updateKeyIfEmpty = (key) => {
      if (typeof key === 'string' && key.length === 0) {
        tableStore.setfilteringKey(key);
        tableStore.setCurrentPage(1);
      }
    };

    return {
      updateFilteringKey,
      updateKeyIfEmpty,
    };
  },
};
</script>
