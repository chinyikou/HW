export default {
    props: {
        id: String,
        labelText: String,
        modelValue: String,
    },
    emits: ['click'],
    setup(props, {emit}) {
        const id = ref(props.id)
        const labelText = ref(props.labelText)
        const modelValue = ref(props.modelValue)
        return {
            id,
            labelText,
            modelValue,
        }
    },
    template:`
    <input />
    `
    
}