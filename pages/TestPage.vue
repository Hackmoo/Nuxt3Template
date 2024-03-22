<script setup lang="ts">
useHead({
  title: "test meta title"
})
definePageMeta({
  layout: 'custom', // It is used for changing layout of the component
  middleware: 'test-middleware' // defines particular middleware on the page
})
</script>

<template>
  <div>
    test page
  </div>
</template>

<style scoped>

</style>