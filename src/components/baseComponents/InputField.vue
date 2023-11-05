<template>
  <div>
    <label v-if="label" :for="id">{{ label }}</label>
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
import { ref } from 'vue';

export default {
  name: 'BaseInput',
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  setup(props, {emit}) {
    const id = ref(props.id);
    const label = ref(props.label);
    const modelValue = ref(props.modelValue);
    const type = ref(props.type);

    const onEnter = (event) => {
      emit('valueEntered', event.target.value);
    };

    const onUpdate = (event) => {
      emit('valueUpdated', event.target.value);
    };

    return {
      id,
      label,
      modelValue,
      type,
      onEnter,
      onUpdate,
    };
  },
};
</script>

<style scoped>
.inputField {
  width: 100%;
}
</style>
