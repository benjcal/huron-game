<template>
  <div class="flex flex-col items-center h-full bg-brand">
    <div class="my-2 text-sm text-gray-500">
      <button class="px-2 mr-1 bg-gray-200 rounded" @click="zoomOut">
        <i class="fas fa-search-minus"></i>
      </button>

      <button class="px-2 bg-gray-200 rounded" @click="zoomIn">
        <i class="fas fa-search-plus"></i>
      </button>
    </div>

    <div>
      <iframe
        ref="iframe"
        class="rounded-md"
        width="1680"
        height="980"
        src="http://localhost/iframe/http_test/index.html"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shell',
  data: () => ({
    currentZoom: 1,
  }),
  methods: {
    zoomIn() {
      this.currentZoom += 0.1
      this.$refs.iframe.style.transform = `scale(${this.currentZoom})`
    },
    zoomOut() {
      this.currentZoom -= 0.1
      this.$refs.iframe.style.transform = `scale(${this.currentZoom})`
    },
  },
}
</script>

<style scoped>
iframe {
  transform-origin: center top;
}
</style>
