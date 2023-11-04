<template>
    <tbody>
        <template v-for="(data, status, index) in getFilteredProductsByPage" :key="index">
          <!-- status -->
          <tr>
            <td class="width1" :rowspan="calstatusRowspan(data)" :style="{backgroundColor: statusColor[status] }">
              {{ status }}
            </td>
          </tr>

          <template v-for="cores in Object.keys(data)">
            <tr>
              <td class="width1" :rowspan="Object.keys(data[cores]).length + 1" :style="{backgroundColor: statusColor[status] }">
                {{ cores }}
              </td>
            </tr>

            <tr v-for="(v, k) in data[cores] " :key="k" :style="{backgroundColor: statusColor[status] }">
              <!-- product -->
              <td class="productColumn">{{ v.Product }}</td>

              <!-- Lithography -->
              <td>{{ v.Lithography }}</td>

              <!-- Threads -->
              <td>
                <div class="innerCells">
                  <input :value="v.Threads" :disabled="true" type="text" />
                </div>
              </td>

              <!-- Base Freq -->
              <td>
                <div class="innerCells">
                  <input :value="v.Base_Freq" :disabled="true" type="text" />
                </div>
              </td>

              <!-- Max Turbo Freq -->
              <td>
                <div class="innerCells">
                  <input :value="v.Max_Turbo_Freq" type="text" :disabled="true" />
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
      tableStore : useTableStore(),
    };
  },
  mounted() {
    for (const status in  this.getStatuses) {
      var color = colorGenerator(this.getStatuses[status])
      this.statusColor[this.getStatuses[status]] = color
    }
  },

  computed: {
    getFilteredProductsByPage() {
      return this.tableStore.getFilteredProductsByPage
    },
    getStatuses() {
      return this.tableStore.getStatusesForAllProducts
    },
    getCurrentPage() {
      return this.tableStore.getCurrentPage
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


<style scoped>
.innerCells {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.productColumn {
  width: 1%;
}

.innerCells.comment {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

input::placeholder {
  color: black;
}

input:focus::-webkit-input-placeholder {
  color: grey;
}

input[disabled] {
  cursor: text;
  background-color: inherit;
  color: black;
}

input[type="text"] {
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  border: 0;
}


</style>