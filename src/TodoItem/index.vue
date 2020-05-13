<template>
  <div :id="'todo-item' + id" class="todo-item">
    <div @dblclick="toggleEditMode" class="todo-item-content">
      <h2 v-if="!isEditMode">{{ title }}</h2>
      <input v-else :value="title">
      <p v-if="!isEditMode">{{ description }}</p>
      <textarea v-else>{{ description }}</textarea>
    </div>

    <div class="buttons">
      <button @click="removeTodoItem" class="remove">X</button>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
