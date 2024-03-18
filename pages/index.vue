<script setup lang="ts">
import {useTestStore} from "~/stores/testStore";

</script>

<template>
  <div>
    <Test />
    <TestDir />
    <TestDirSecondComponent />
    <button @click="useTestStore().testFunc">232</button>
    <NuxtLink to="/testPage">link to another page</NuxtLink>
    {{ useTestStore().test }}
    indexPage
  </div>
</template>

<style scoped>

</style>