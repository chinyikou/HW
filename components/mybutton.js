import {} from '../CommonJS/vue.js'
export default {
    props: {
        btnname: String,
    },
    emits: ['doClick'],
    setup(props, {emit}) {
        const type = props.eventtype
        const handleClick = () =>{            
            emit('doClick')
        }
        return {
            handleClick,
        }
    },
    template:`
        <button type="button" @click="handleClick">{{btnname}}</button>
    `    
}