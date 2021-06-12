<template>
  <div class="px-8 prose">
    <h1>{{ msg }}</h1>
    <button role="button" name="count" class="px-3 py-2 border border-gray-300 rounded-md shadow" @click="increment">
      count is: {{ count }}
    </button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
    <p class="text-sm text-gray-700">vite-ts-tailwind-starter v{{ appVersion }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore, Mutation } from '@/store/index'

export default defineComponent({
  props: {
    msg: String
  },
  setup(props) {
    const store = useStore()
    const appVersion = store.state.version // not reactive!
    const count = computed(() => store.state.count)

    function increment() {
      store.commit(Mutation.INCREMENT, 1)
    }
    return {
      increment, count, appVersion
    }
  }
})



</script>
