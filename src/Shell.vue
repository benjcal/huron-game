<template>
  <div class="flex justify-center w-full h-full bg-brand">
    <div class="container">
      <div class="mb-4 text-white text-8xl">Huron Game</div>

      <div class="flex items-end mb-1">
        <div class="text-sm font-medium text-white uppercase w-80">
          Select Set below
        </div>

        <div class="flex-auto text-sm font-medium text-white uppercase">
          Description
        </div>
      </div>
      <div class="flex">
        <!-- selector of sets available -->
        <div
          class="px-4 py-2 mr-1 bg-white border-2 border-gray-400 border-opacity-50 rounded-md w-96 h-96"
        >
          <div>
            Ending S Set
          </div>
          <div>Transportation Set</div>
          <div>Professions Set</div>
        </div>

        <!-- description -->
        <div
          class="px-4 py-2 bg-white border-2 border-gray-400 border-opacity-50 rounded-md"
        >
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora
            ipsum dicta quae dolor. Sint assumenda nesciunt ab molestiae error
            non, fugiat mollitia eum eius dolores ullam rerum tenetur maxime!
          </div>
        </div>
      </div>
      <div class="mt-2 text-right">
        <button
          class="px-4 py-2 font-medium text-white bg-yellow-600 rounded-md hover:bg-yellow-700"
        >
          <span class="mr-2">Start Game</span>

          <i class="fas fa-play"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style></style>
