import bus from '../bus';

export default {
    name: 'CreateTodoList',
    data() {
        return {
            title: '',
            description: '',
        }
    },
    methods: {
        createTodoItem: function() {
            // todoItems.push
            bus.$emit('createTodoItem', {
                title: this.title,
                description: this.description,
            });
            this.title = '';
            this.description = '';
        },


    }
}
