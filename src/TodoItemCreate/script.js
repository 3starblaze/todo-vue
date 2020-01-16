import bus from '../bus';

export default {
    name: 'CreateTodoList',
    data() {
        return {
            title: '',
            description: '',
            idCounter: 100, // improve this
        }
    },
    methods: {
        createTodoItem: function() {
            // todoItems.push
            bus.$emit('createTodoItem', {
                id: this.idCounter++,
                title: this.title,
                description: this.description,
            });
            this.title = '';
            this.description = '';
        },


    }
}
