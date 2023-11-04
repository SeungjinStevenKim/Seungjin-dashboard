<template>
    <!-- Hide By status Bar -->
    <div class="filterBar">
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

    <ProductInputFilter />



    </div>

</template>

<script>
import { useTableStore }  from '../store/TableStore';
import ProductInputFilter from './ProductInputFilter.vue';
export default {
  components: { ProductInputFilter },

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


<style scoped>

.filterBar {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    column-gap: 30px;
}

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


