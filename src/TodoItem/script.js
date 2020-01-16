import bus from '../bus'

export default {
    name: 'TodoItem',
    props: {
        id: String,
        title: String,
        description: String,
        isDone: Boolean,
    },
    methods: {
        removeTodoItem: function() {
            bus.$emit('removeTodoItem', this.id);
        }
    }
}
