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
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const wwInfo = ref({});
    const currentDate = new Date();

    const getWWFromDate = (date = null) => {
      const startDate = new Date(currentDate.getFullYear(), 0, 1);
      const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));

      return {
        year: date.getFullYear(),
        workweek: Math.ceil(days / 7),
        numofday: date.getDay(),
      };
    };

    onMounted(() => {
      wwInfo.value = getWWFromDate(currentDate);
    });

    const wwData = computed(() => `${wwInfo.value.year}WW${wwInfo.value.workweek}.${wwInfo.value.numofday}`);

    return {
      wwData,
    };
  },
};
</script>
