<script setup lang="ts">
import type { Channel } from '@/types/types'
import { useChannelsStore } from '@/stores/channels'

defineProps<{
  item: Channel
}>()

const { removeChannel } = useChannelsStore()
</script>

<template>
  <div
    class="flex gap-2 items-center pl-4 pr-4 p-2 first-of-type:pt-0 last-of-type:pb-0"
    data-testid="channel-item"
  >
    <font-awesome-icon icon="fa-solid fa-grip-vertical" />
    <div class="p-2 bg-blue-50 rounded">
      <font-awesome-icon :icon="item.icon" />
    </div>
    <p class="flex-1 truncate">
      {{ item.name }}
    </p>
    <button class="text-gray-500 font-bold" @click="removeChannel(item.name)">Remove</button>
  </div>
</template>

<style scoped></style>
