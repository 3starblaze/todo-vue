import TodoItem from '../TodoItem/index.vue';
import TodoItemCreate from '../TodoItemCreate/index.vue';

import bus from '../bus';

export default {
    name: 'App',
    components: {
        'todo-item': TodoItem,
        'todo-item-create': TodoItemCreate,
    },
    created() {
        bus.$on('createTodoItem', this.createTodoItemHandler);
    },
    data() {
        return {
            todoItems: JSON.parse(localStorage.getItem('todoItems')) || [],
        }
    },
    methods: {
        createTodoItemHandler: function(todoItem) {
            todoItem.id = 'todo-item' + this.todoItems.length;
            this.todoItems.push(todoItem);
            localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
        },
    },
}
