<template>
  <div class="p-border" :style="{ top: x + 'px', left: y + 'px' }">
    <div class="p-in" :style="{ height: val + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    val: Number,
    x: Number,
    y: Number,
  },
}
</script>

<style>
.p-border {
  position: absolute;
  width: 60px;
  height: 600px;
  border: 8px solid #e0b43a;
  border-radius: 10px;
  display: flex;
  flex-direction: column-reverse;
}

.p-in {
  background: #fbd56b;
  width: 60px;
  border-radius: 1px;
  transition: height 0.5s ease;
}
</style>
