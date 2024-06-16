import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Channel } from '@/types/types'
import getRandomIcon from '@/utils/getRandomIcon'

const initialValues = [
  {
    name: 'Team@trengo.com',
    icon: 'envelope'
  },
  {
    name: 'Call center',
    icon: 'phone'
  }
]
export const useChannelsStore = defineStore('channels', () => {
  const channels = ref(initialValues)

  const initialState = ref([...channels.value])

  const displayActions = computed(() => {
    if (channels.value.length !== initialState.value.length) return true
    for (let i = 0; i < channels.value.length; i++) {
      const channel = channels.value[i]
      const initialChannel = initialState.value[i]
      if (channel.name !== initialChannel.name || channel.icon !== initialChannel.icon) return true
    }
    return false
  })

  function cancelChanges() {
    channels.value = [...initialState.value]
    resetSearch()
  }

  function applyChanges() {
    initialState.value = [...channels.value]
    resetSearch()
  }

  const searchValue = ref('')

  function resetSearch() {
    searchValue.value = ''
  }

  const filteredChannels = computed(() =>
    channels.value.filter((item) =>
      item.name.toLowerCase().includes(searchValue.value.toLowerCase())
    )
  )

  function addChannel(name: string) {
    if (!name.trim()) return
    if (filteredChannels.value.find((channel) => channel.name === name)) return
    const newChannel: Channel = {
      name,
      icon: getRandomIcon()
    }
    channels.value.push(newChannel)
    resetSearch()
  }
  function removeChannel(name: string) {
    channels.value.splice(
      channels.value.findIndex((item) => item.name === name),
      1
    )
  }

  return {
    channels,
    filteredChannels,
    addChannel,
    removeChannel,
    searchValue,
    cancelChanges,
    applyChanges,
    displayActions
  }
})
