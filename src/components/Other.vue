<template>
  <h1>Others {{ what }}</h1>
</template>

<script>
export default {
  props: {
    what: {
      type: String,
      required: true
  }
}
</script>

<style>

</style>