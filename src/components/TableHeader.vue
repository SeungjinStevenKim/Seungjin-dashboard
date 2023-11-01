<template>
      <thead>
        <tr>
          <td :colspan="12">Dashboard SLA</td>
        </tr>
        <tr>
          <th colspan="3">{{ wwData }}</th>
          <th colspan="8">Product Info</th>
        </tr>
        <tr>
          <th>Status</th>
          <th>Cores</th>
          <th class="width1">Product</th>
          <th class="width1">Lithography</th>
          <th>Threads</th>
          <th>Base Freq</th>
          <th>Max Turbo Freq</th>
        </tr>
      </thead>
</template>


<script>
export default {
  data: function () {
    return {
      wwInfo: {},
    };
  },
  mounted() {
    this.wwInfo = this.getWWFromDate();
  },
  computed: {
    wwData() {
      return `${this.wwInfo.year}WW${this.wwInfo.workweek}.${this.wwInfo.numofday}`;
    }
  },
  methods: {
    getWWFromDate(date = null) {
      let currentDate = date || new Date();
      let startDate = new Date(currentDate.getFullYear(), 0, 1);
      let days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

      return {
        year: currentDate.getFullYear(),
        workweek: Math.ceil(days / 7),
        numofday: currentDate.getDay(),
      };
    }
  }
}
</script>




