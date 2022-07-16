<template>
  <label :class="$style.wrapper">
    {{ label }}
    <input
      type="checkbox"
      :value="value"
      :checked="isChecked"
      @change="updateValue"
    />
    <span :class="$style.checkmark"></span>
  </label>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  props: {
    label: String,
    modelValue: {
      default: '',
    },
    value: {
      type: String,
    },
    trueValue: {
      default: true,
    },
    falseValue: {
      default: false,
    },
  },
  setup(props, { emit }) {
    const isChecked = computed(() => {
      if (props.modelValue instanceof Array) {
        return props.modelValue.includes(props.value)
      } else {
        props.modelValue === props.trueValue
      }
    })

    const updateValue = (event) => {
      let isChecked = event.target.checked
      if (props.modelValue instanceof Array) {
        const newValue = [...props.modelValue]
        if (isChecked) {
          newValue.push(props.value)
        } else {
          newValue.splice(newValue.indexOf(props.value), 1)
        }
        emit('update:modelValue', newValue)
      } else {
        emit(
          'update:modelValue',
          isChecked.value ? props.trueValue : props.falseValue
        )
      }
    }
    return {
      isChecked,
      updateValue,
    }
  },
}
</script>

<style lang="scss" scoped module>
.wrapper {
  position: relative;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 21px;
    width: 21px;
    border-radius: 2px;
    background-color: #eee;
    border: 1px solid #ccc;
    &::after {
      content: '';
      position: absolute;
      display: none;

      left: 7px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
  input:checked ~ .checkmark::after {
    display: block;
  }
  input:checked ~ .checkmark {
    background-color: #1cd4a7;
  }
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
}
</style>
