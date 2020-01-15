import TodoItem from '../TodoItem/index.vue';

export default {
    name: 'App',
    components: {
        'todo-item': TodoItem,
    },
    data() {
        return {
            todoItems: [
                { id: 1, title: "todo1", description: "do1"},
                { id: 2, title: "todo2", description: "do2"},
                { id: 3, title: "todo3", description: "do3"},
            ],
        }
    },
}
