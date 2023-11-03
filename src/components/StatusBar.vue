<template>
    <!-- Hide By status Bar -->
    <div class="hideBar">
      <div class="hideLabel"> Select Status that you want to hide from below table</div>

      <div class="checkbox">
        <!-- All status -->
        <div>
          <label :for="getStatuses">All statuses</label>
          <input
            :id="getStatuses"
            type="checkbox"
            class="styled"
            :value="getStatuses"
            @click="tableStore.hideShowALLstatus"
          />
        </div>
        <!-- Dynamic status -->
        <div v-for="status in getStatuses" :key="status">
          <label :for="`${status}`">
            {{ status }}
          </label>

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
import { useTableStore }  from '../store/TableStore';

export default {

  setup() {
    const tableStore = useTableStore()

    return { tableStore }
  },


  computed: {
    getStatuses() {
      return this.tableStore.getStatusesForAllProducts
    },
  },

}
</script>


<style>
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