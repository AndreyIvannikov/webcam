import { computed } from 'vue'
export default {
    props: {
        iconName: {
            type: String,
        },
        size: {
            type: String,
            default: 'sm'
        },
        auto: Boolean,
    },
    setup(props) {
        const icons = {
            // 'arrow'  require('@/assets/img/arrow.svg')
            // 'arrow': new URL('@/assets/img/arrow.svg', 'assets/img')
        }
        console.log(props.size);

        const iconComponent = computed(() => {
            return icons[props.iconName]
        })
        
        return {
            icons,
            iconComponent
        }
    },
}