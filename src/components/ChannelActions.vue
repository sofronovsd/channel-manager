<script setup lang="ts">
import { useChannelsStore } from '@/stores/channels'

const channelsStore = useChannelsStore()
</script>

<template>
  <div class="flex gap-2 justify-end">
    <button
      class="rounded-full border-gray-400 border p-1 pl-4 pr-4 text-sm font-bolder"
      @click="channelsStore.cancelChanges()"
    >
      Cancel
    </button>
    <button
      class="rounded-full bg-black border-gray-400 border p-1 pl-4 pr-4 text-sm font-bolder text-white"
      @click="channelsStore.applyChanges()"
    >
      Apply
    </button>
  </div>
</template>

<style scoped></style>
