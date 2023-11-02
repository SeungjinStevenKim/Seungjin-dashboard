<template>
    <tbody>
        <template v-for="(data, status, index) in getProducts">
          <!-- status -->
          <tr>
            <td :style="{backgroundColor: statusColor[status] }" class="width1" :rowspan="calstatusRowspan(data)">
              {{ status }}
            </td>
          </tr>

          <template v-for="cores in Object.keys(data)">
            <!-- cores -->
            <tr>
              <td  :style="{backgroundColor: statusColor[status] }" class="width1" :rowspan="Object.keys(data[cores]).length + 1" >
                {{ cores }}
              </td>
            </tr>

            <tr v-for="(v, k) in data[cores]">
              <!-- product -->
              <td  :style="{backgroundColor: statusColor[status] }" class="productColumn">{{ v.Product }}</td>

              <!-- Lithography -->
              <td  :style="{backgroundColor: statusColor[status] }">{{ v.Lithography }}</td>

              <!-- Threads -->
              <td>
                <div class="innerCells">
                  <input  :style="{backgroundColor: statusColor[status] }" :value="v.Threads" :disabled="true" type="text" />
                </div>
              </td>

              <!-- Base Freq -->
              <td>
                <div class="innerCells">
                  <input  :style="{backgroundColor: statusColor[status] }" :value="v.Base_Freq" :disabled="true" type="text" />
                </div>
              </td>

              <!-- Max Turbo Freq -->
              <td>
                <div class="innerCells">
                  <input  :style="{backgroundColor: statusColor[status] }" :value="v.Max_Turbo_Freq" type="text" :disabled="true" />
                </div>
              </td>
            </tr>
          </template>
        </template>
      </tbody>
</template>


<script>
import { useTableStore }  from '../store/TableStore';
import { colorGenerator } from '../utils/colorGenerator';

export default {
    data: function () {
    return {
      statusColor: {},
      tableStore : useTableStore()
    };
  },
  mounted() {
    for (const status in  this.getStatuses) {
      var color = colorGenerator(this.getStatuses[status])
      this.statusColor[this.getStatuses[status]] = color
    }
  },

  computed: {
    getProducts() {
      return this.tableStore.productDataBystatus.data
    },
    getStatuses() {
      return this.tableStore.productDataBystatus.status
    }
  },

  methods: {
    calstatusRowspan(data) {
      let sum = Object.keys(data).length + 1;
      for (const cores in data) {
        sum += Object.keys(data[cores]).length;
      }
      return sum;
    },
  }
}

</script>


<style>
.innerCells {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.innerCells.comment {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
}


</style>