<script setup lang="ts">
import { useChannelsStore } from '@/stores/channels'

const channelsStore = useChannelsStore()
</script>

<template>
  <div>
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="absolute pl-2.5 pt-2" />
    <input
      type="text"
      placeholder="Add channel"
      class="bg-transparent border-gray-300 border rounded-full placeholder:text-gray-600 p-1 pl-8 w-full"
      v-model="channelsStore.searchValue"
      @keyup.enter="() => channelsStore.addChannel(channelsStore.searchValue)"
    />
  </div>
</template>

<style scoped></style>
