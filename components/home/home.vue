<script setup>
const {data} = useFetch('/api/todo/a8f0c268-3da5-480f-9b00-bdda5142c71e', {
  method: "PUT",
  body: {
    task: 'adafsd',
    "is_completed": true
  },
})
</script>
<template>
  <h1>Creating Rest APIs with a todo app</h1>

  <h2>{{ data }}</h2>
</template>


<style lang="sass" scoped></style>
