<template>
  <div
    @click="click"
    class="big-button"
    :class="{ enabled: enabled }"
    :style="{ top: x + 'px', left: y + 'px' }"
  >
    Reveal
  </div>
</template>

<script>
export default {
  name: 'BigButton',
  props: {
    x: Number,
    y: Number,
    enabled: Boolean,
  },
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style>
.big-button {
  cursor: pointer;
  width: 200px;
  height: 200px;

  border-radius: 50%;

  background: #f88222;
  border: 12px solid #c5681b;

  font-family: 'Balsamiq Sans', cursive;
  color: #fff;
  font-size: 40px;

  opacity: 0.6;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
}

.enabled {
  opacity: 1;
  transition: font-size 0.3s;
}

.enabled:hover {
  font-size: 48px;
  transition: font-size 0.3s;
}
</style>
