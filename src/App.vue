<template>
  <div class="justify-center flex-1">
    <div class="container pt-8 mx-auto">
      <HelloWorld msg="Hello Vue 3 + Vite + Tailwind CSS" />
      <Team teamName="WebF"></Team>
      <Other what="Truc"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Team from './components/Team.vue'
import Other from "./components/Other.vue";
</script>
