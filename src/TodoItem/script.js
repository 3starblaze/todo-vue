import bus from '../bus'

export default {
    name: 'TodoItem',
    data() {
        return {
            isEditMode: false,
        }
    },
    props: {
        id: String,
        title: String,
        description: String,
        isDone: Boolean,
    },
    methods: {
        removeTodoItem: function() {
            bus.$emit('removeTodoItem', this.id);
        },
        toggleEditMode: function() {
            this.isEditMode = !this.isEditMode;
        }
    }
}
