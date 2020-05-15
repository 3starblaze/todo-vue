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
        bus.$on('removeTodoItem', this.removeTodoItemHandler);
        bus.$on('editTodoItem', this.editTodoItemHandler);
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
        removeTodoItemHandler: function(id) {
            let todoIndex = this.todoItems.findIndex(todoItem => todoItem.id == id);
            if (todoIndex == -1) throw `No todo item with index ${id}`;
            this.todoItems.splice(todoIndex, 1);
            localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
        },
        editTodoItemHandler: function(todoItem) {
            let todoIndex = this.todoItems.findIndex(item => item.id == todoItem.id);
            if (todoIndex == -1) throw `No todo item with index ${id}`;
            this.todoItems[todoIndex] = todoItem;
            localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
        }
    },
}
