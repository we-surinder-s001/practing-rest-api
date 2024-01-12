<script setup>
const {data} = useFetch('/api/todo/', {
  method: "Post",
  body: {
    task: 'new task'
  },
})
</script>
<template>
  <h1>Creating Rest APIs with a todo app</h1>

  <h2>{{ data }}</h2>
</template>


<style lang="sass" scoped></style>
