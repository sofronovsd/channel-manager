<script setup lang="ts">
import draggable from 'vuedraggable'
import SearchInput from '@/components/SearchInput.vue'
import ChannelItem from '@/components/ChannelItem.vue'
import ChannelActions from '@/components/ChannelActions.vue'
import { useChannelsStore } from '@/stores/channels'
import ScrollableList from '@/components/ScrollableList.vue'

const channelsStore = useChannelsStore()
</script>

<template>
  <div class="flex flex-col p-3 bg-white max-w-md rounded-lg gap-4">
    <SearchInput />
    <ScrollableList>
      <draggable
        v-if="!channelsStore.searchValue"
        v-model="channelsStore.channels"
        item-key="name"
        ghost-class="ghost"
        :class="`${channelsStore.searchValue ? '' : 'cursor-grab'}`"
        :disabled="channelsStore.searchValue"
      >
        <template #item="{ element }">
          <ChannelItem :item="element" />
        </template>
      </draggable>
      <ChannelItem
        v-for="element in channelsStore.filteredChannels"
        :key="element.name"
        :item="element"
        v-else
      />
    </ScrollableList>
    <ChannelActions v-if="channelsStore.displayActions" />
  </div>
</template>

<style scoped>
.ghost {
  @apply opacity-50 bg-gray-400;
}
</style>
