<template>
  <div :id="'todo-item' + id" class="todo-item">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <button @click="removeTodoItem">X</button>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
