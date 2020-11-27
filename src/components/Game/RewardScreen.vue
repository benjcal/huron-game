<template>
  <div @click="click" class="reward">
    <img src="../assets/trophy.png" width="600" height="600" />
    <div>Super Awesome Reward!!</div>
    <div class="small">Click to play again!</div>
  </div>
</template>

<script>
export default {
  name: 'Reward',
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style>
.reward {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);

  font-size: 80px;
  font-family: 'Balsamiq Sans', cursive;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
}

.small {
  font-size: 30px;
}
</style>
