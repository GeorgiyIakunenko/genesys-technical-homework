<script setup lang="ts">
import { onMounted } from 'vue'
import { useCharacterStore } from '@/stores'
import router from '@/router'
import CharacterProfileCard from '@/components/CharacterProfileCard.vue'
import Button from '@/components/Button.vue'
import Spinner from '@/components/Spinner.vue'

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
        <Spinner class="mt-20" />
      </div>
    </div>
  </main>
</template>

<style></style>
