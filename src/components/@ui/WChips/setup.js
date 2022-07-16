import { ref, computed } from 'vue'
export default {
  name: 'RButton',
  props: {
    title: {
      type: String,
    },
  },
  setup(_, { emit }) {
    const handleDelete = () => {
      emit('delete')
    }
    return {
      handleDelete
    }
  },
}
