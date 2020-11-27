<template>
  <div class="tile" :style="tileStyle" @click="click">
    <img v-show="prize" class="coin" src="../assets/coin_07.png" alt="" />
    <div :class="tileAnimationClassToggle">
      <div class="tile-img">
        <div class="flex justify-center">
          <img src="http://localhost/img/dress_r.png" />
        </div>
      </div>

      <p class="tile-text">Hello</p>
      <img src="../assets/tile_cover.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    x: Number,
    y: Number,
    prize: Boolean,
    open: Boolean,
    imgSrc: String,
  },
  computed: {
    tileAnimationClassToggle() {
      return this.open ? 'move-tile-up' : 'move-tile-down'
    },
  },
  data: () => ({
    tileStyle: {
      top: 0,
      left: 0,
    },
  }),
  methods: {
    click() {
      this.$emit('click')
    },
  },
  beforeMount() {
    this.tileStyle.top = this.x + 'px'
    this.tileStyle.left = this.y + 'px'
  },
}
</script>

<style>
.tile {
  width: 256px;
  height: 300px;

  user-select: none;

  background: url('../assets/tile_bottom.png');

  clip: rect(0px, 256px, 300px, 0px);
  position: absolute;
}

.tile-text {
  position: absolute;
  width: 256px;
  text-align: center;
  font-size: 22px;
  top: 226px;
}

.tile-img {
  position: absolute;
  width: 256px;
  text-align: center;
  font-size: 20px;
  top: 36px;
  left: 0px;
}

.move-tile-up {
  transform: translateY(-280px);
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -ms-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
}

.move-tile-down {
  transform: translateY(0px);
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -ms-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
}

.coin {
  position: absolute;
  top: 74px;
  left: 56px;
}
</style>
