<template>
  <div>
    <h1>Todo list</h1>
    <todo-item
        v-for="item in todoItems"
        v-bind="item"
        :key="item.id"
        ></todo-item>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
