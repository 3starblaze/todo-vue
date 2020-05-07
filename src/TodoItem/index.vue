<template>
  <div :id="'todo-item' + id" class="todo-item">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <div class="buttons">
      <button @click="editTodoItem" class="edit">Edit</button>
      <button @click="removeTodoItem" class="remove">X</button>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
