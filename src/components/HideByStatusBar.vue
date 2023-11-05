<template>
  <div class="hideBar">
    <div class="hideLabel">Select Status that you want to hide from below table</div>
    <div class="checkbox">
      <!-- All statuses -->
      <div>
        <label :for="tableStore.getStatusesForAllProducts">All statuses</label>
        <input
          :id="tableStore.getStatusesForAllProducts"
          type="checkbox"
          class="styled"
          :value="tableStore.getStatusesForAllProducts"
          @click="tableStore.hideShowALLstatus"
        />
      </div>
      <!-- Dynamic statuses -->
      <div v-for="status in tableStore.getStatusesForAllProducts" :key="status">
        <label :for="`${status}`">{{ status }}</label>
        <input
          :id="`${status}`"
          type="checkbox"
          class="styled"
          :value="status"
          v-model="tableStore.getHiddenStatus"
          @click="tableStore.hideShowStatus(status)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useTableStore } from '../store/TableStore';

export default {
  setup() {
    const tableStore = useTableStore();

    return {
      tableStore
    };
  },
};
</script>

<style scoped>
.hideBar {
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  align-items: center;
}

.hideLabel {
  font-weight: bold;
}

.checkbox {
  list-style: none;
  display: flex;
  justify-content: center;
  column-gap: 20px;
}
</style>