<template>
  <form class="todo-item-create">
    <div class="title-input input">
      <label>Title</label>
      <input type="text" name="title" v-model="title" />
    </div>

    <div class="description-input input">
      <label>Description</label>
      <textarea v-model="description"></textarea>
    </div>

    <button @click.prevent @click="createTodoItem">clek</button>
  </form>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
