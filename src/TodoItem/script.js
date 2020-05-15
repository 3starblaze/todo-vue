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
    watch: {
        title: function(newTitle, oldTitle) {
            this.updateTodoItem();
        },
        description: function(newDescription, oldDescription) {
            this.updateTodoItem();
        },
        isDone: function(newIsDone, oldIsDone) {
            this.updateTodoItem();
        }
    },
    methods: {
        removeTodoItem: function() {
            bus.$emit('removeTodoItem', this.id);
        },
        toggleEditMode: function() {
            this.isEditMode = !this.isEditMode;
        },
        updateTodoItem: function() {
            console.log('updateTodoItem has been called')
            console.log(this);
            bus.$emit('editTodoItem',
                      {
                          id: this.id,
                          title: this.title,
                          description: this.description,
                          isDone: this.isDone
                      });
        }
    }
}
