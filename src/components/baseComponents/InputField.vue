<template>
  <div>
    <label v-if="label" :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="onUpdate"
      @keyup.enter="onEnter"
      class="inputField"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },

  },
  methods: {
    onEnter(event) {
      this.$emit("valueEntered", event.target.value);
    },
    onUpdate(event) {
      this.$emit("valueUpdated", event.target.value);
    }
  }
};
</script>


<style scoped>
.inputField {
  width: 100%;
}
</style>