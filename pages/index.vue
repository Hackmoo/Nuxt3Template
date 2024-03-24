<script setup lang="ts">
import { useTestStore } from '@/stores/testStore'
const { testFunction } = useTestComposable()
const { $sayHello } = useNuxtApp()
$sayHello('3') // it's a plugin. It is used always with a $ at the start
</script>

<template>
  <div>
    <Test />
    <TestDir />
    <TestDirSecondComponent />
    <button @click="useTestStore().testFunc">Test store </button>
    <button @click="testFunction"> Test composables </button>
    <NuxtLink to="/testPage">link to another page</NuxtLink>
    <img src="@/assets/Untitled.png" alt="">
    {{ useTestStore().test }}
    indexPage
  </div>
</template>

<style scoped></style>