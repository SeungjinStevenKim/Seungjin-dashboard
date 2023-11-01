<template>
  <div>
    <!-- Hide By status Bar -->
    <div class="hideBar">
      <div class="hideLabel"> Select Status that you want to hide from the table</div>
      
      <div class="checkbox">
        <!-- All status -->
        <div>
          <label :for="statuses">All statuses</label>
            <input
              :id="statuses"
              type="checkbox"
              class="styled"
              :value="statuses"
              @click="hideShowALLstatus(statuses)"
            />
        </div>

        <!-- Dynamic status -->
        <div v-for="status in statuses" :key="status">
          <label :for="`${status}`">
            {{ status }}
          </label>

          <input
            :id="`${status}`"
            type="checkbox"
            class="styled"
            :value="status"
            v-model="hidestatus"
          />
        </div>
      </div>

    </div>
  </div>    
</template>

<script>
export default {
   props: ['statuses'],
  
  data() {
    return {
      hidestatus: [],
      allCheckBox: [],
      allCheck: false,
    }
  },

  methods: {
    hideShowALLstatus(statuses) {
      if (!document.querySelector(".styled").checked) {
        this.hidestatus = [];
        this.allCheckBox = [];
      }

      if (document.querySelector(".styled").checked) {
        this.hidestatus = statuses
        this.allCheckBox = statuses
      }

      this.allCheck = !this.allCheck;

      if (this.allCheck) {
      } else {
        this.hidestatus = [];
        this.allCheckBox = [];
      }
    },
  }
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
  column-gap: 10px;

}

</style>