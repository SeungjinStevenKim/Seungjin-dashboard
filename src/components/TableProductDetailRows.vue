<template>
    <tr v-for="(v, k) in data[cores]">
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