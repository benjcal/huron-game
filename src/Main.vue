<template>
  <div class="h-full">
    <Selector v-if="false" />
    <Shell />
  </div>
</template>

<script>
import Selector from './components/Selector.vue'
import Shell from './components/Shell.vue'
export default {
  name: 'Main',
  components: {
    Selector,
    Shell,
  },
}
</script>

<style></style>
