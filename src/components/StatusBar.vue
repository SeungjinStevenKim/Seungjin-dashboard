<template>
  <div>
    <!-- Hide By status Bar -->
    <div class="hideBar">
      <div class="hideLabel"> Select Status that you want to hide </div>

      <div class="checkbox">
        <!-- All status -->
        <label :for="getStatuses">All statuses</label>
          <input
            :id="getStatuses"
            type="checkbox"
            class="styled"
            :value="getStatuses"
            @click="tableStore.hideShowALLstatus"
          />
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
            v-model="tableStore.getHideState"
            @click="tableStore.handleCheckedBox(status)"
          />
        </div>
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
        return this.tableStore.productDataBystatus.status
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

}

.checkbox {
  list-style: none;
  display: flex;
  justify-content: flex-start;

}

</style>