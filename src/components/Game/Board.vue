<template>
  <div id="huron-game" v-show="ready" class="absolute">
    <div :class="{ 'bg-blur': showReward }">
      <Tile
        v-for="(tile, i) in tileArray"
        :key="i"
        :x="getPositions[i].x"
        :y="getPositions[i].y"
        :prize="prizes[i]"
        :open="openTiles[i]"
        :imgSrc="tile.img_src"
        @click="handleTileClick(i)"
      />
      <ProgressBar :x="344" :y="1496" :val="progressVal" />
      <RevealButton
        @click="reveal"
        :x="20"
        :y="1416"
        :enabled="progressVal === 100"
      />
    </div>
    <!-- <Reward v-if="showReward" @click="hideReward" /> -->
    <Fireworks v-if="showReward" @click="hideReward" />
    <audio ref="coin" src="@/assets/coin_found.ogg"></audio>
    <audio ref="reward" src="@/assets/reward.ogg"></audio>
  </div>
</template>

<script>
import Tile from './Tile'
import ProgressBar from './ProgressBar'
import RevealButton from './RevealButton'
// import Reward from './Reward'
import Fireworks from './Fireworks'

export default {
  name: 'Board',
  components: {
    Tile,
    ProgressBar,
    RevealButton,
    Fireworks,
    // Reward,
  },
  data: () => ({
    tileArray: [],
    openTiles: Array(15).fill(false),
    prizes: [],
    ready: false,
    showReward: false,
  }),
  computed: {
    getColumns() {
      const column = []
      const PADDING = 20
      const TILE_WIDTH = 256
      const H_TILES = 5

      for (let i = 0; i < H_TILES; i++) {
        if (i === 0) {
          column.push(PADDING)
        } else {
          column.push(column[i - 1] + PADDING + TILE_WIDTH)
        }
      }

      return column
    },
    getPositions() {
      const positions = []
      const rows = []
      const V_TILES = 3
      const PADDING = 20
      const TILE_HEIGHT = 300

      for (let i = 0; i < V_TILES; i++) {
        if (i === 0) {
          rows.push(PADDING)
        } else {
          rows.push(rows[i - 1] + PADDING + TILE_HEIGHT)
        }
      }

      rows.forEach((r) => {
        const x = r
        this.getColumns.forEach((y) => {
          positions.push({ x, y })
        })
      })

      return positions
    },
    progressVal() {
      const total = 6
      const current = this.prizes.filter((p) => p).length

      const val = (current / total) * 100

      return 100 - val
    },
  },
  methods: {
    handleTileClick(i) {
      this.openTiles = [
        ...this.openTiles.slice(0, i),
        !this.openTiles[i],
        ...this.openTiles.slice(i + 1),
      ]
      setTimeout(() => {
        if (this.prizes[i]) {
          // play coin sound here
          this.$refs.coin.play()
        }
        this.prizes = [
          ...this.prizes.slice(0, i),
          false,
          ...this.prizes.slice(i + 1),
        ]
      }, 1500)
    },
    reveal() {
      if (this.progressVal !== 100) {
        return
      }
      // play reveal sound here
      this.$refs.reward.play()
      this.showReward = true
    },
    hideReward() {
      this.init()
      this.showReward = false
    },
    genRandomPrizePositions() {
      let a = []
      let b = []

      do {
        for (;;) {
          const x = Math.floor(Math.random() * 15)
          if (!a.includes(x)) {
            a.push(x)
            break
          }
        }
      } while (a.length < 6)

      for (let i = 0; i < 15; i++) {
        if (a.includes(i)) {
          b.push(true)
        } else {
          b.push(false)
        }
      }
      this.prizes = b
    },
    closeAllTiles() {
      this.openTiles = Array(15).fill(false)
    },
    init() {
      let data = localStorage.getItem('_huron_data')
      if (!data) {
        return false
      }

      data = JSON.parse(data)

      this.tileArray = data.tiles

      this.closeAllTiles()

      if (this.prizes.filter((x) => x).length === 0) {
        setTimeout(() => {
          this.genRandomPrizePositions()
        }, 1100)
      }

      return true
    },
  },
  mounted() {
    if (this.init()) {
      setTimeout(() => {
        this.ready = true
      }, 1000)
    }
  },
}
</script>

<style>
.bg-blur {
  filter: blur(10px);
}
</style>
