<template>
  <h1>team</h1>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name:'Team',
  props : {
    teamName: {
      type: String,
      required: true
    }
  },
  setup(props) {

  }
})
</script>

<style>

</style>