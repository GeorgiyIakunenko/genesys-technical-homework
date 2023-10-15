<script setup lang="ts">
import { onMounted } from 'vue'
import router from '@/router'
import CharacterProfileCard from '@/components/CharacterProfileCard.vue'
import { useCharacterStore } from '@/stores'
import Button from '@/components/Button.vue'
import Loading from '@/components/Loading.vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const characterStore = useCharacterStore()

const goBack = () => {
  router.replace('/page/' + characterStore.currentPage)
}

onMounted(async () => {
  await characterStore.getById(props.id)
})
</script>
<template>
  <main>
    <div class="container">
      <div class="mx-auto w-fit">
        <Button class="mb-5" @click="goBack">Back</Button>
        <div v-if="characterStore.currentCharacter && !characterStore.isLoading">
          <CharacterProfileCard :character="characterStore.currentCharacter" />
        </div>
      </div>

      <div
        class="flex items-center justify-center"
        v-if="!characterStore.currentCharacter || characterStore.isLoading"
        role="status"
      >
        <Loading class="mt-14" />
      </div>
    </div>
  </main>
</template>

<style></style>
