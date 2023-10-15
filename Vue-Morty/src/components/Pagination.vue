<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{
  currentPage: number
  totalPages: number
  numberOfButtonsOnDesktop?: number
  numberOfButtonsOnMobile?: number
  changePage: (page: number) => void
}>()

const numberOfPages = ref<number>(3)

const updateDisplayedPages = () => {
  if (window.innerWidth < 768) {
    props.numberOfButtonsOnMobile
      ? (numberOfPages.value = props.numberOfButtonsOnMobile)
      : (numberOfPages.value = 3)
  } else {
    props.numberOfButtonsOnDesktop
      ? (numberOfPages.value = props.numberOfButtonsOnDesktop)
      : (numberOfPages.value = 5)
  }
}

onMounted(() => {
  updateDisplayedPages()
  window.addEventListener('resize', updateDisplayedPages)
})

const displayedPages = computed(() => {
  const half = Math.floor(numberOfPages.value / 2)
  const start = Math.max(1, props.currentPage - half)
  const end = Math.min(props.totalPages, start + numberOfPages.value - 1)

  const pages = []
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})
</script>

<template>
  <div v-if="totalPages > 1" class="flex gap-2 md:gap-3">
    <div
      @click="changePage(1)"
      class="pagination-button first-arrow-button arrow"
      :class="{ disabled: currentPage < 3 }"
    >
      {{ '<<' }}
    </div>
    <div
      @click="changePage(currentPage - 1)"
      class="pagination-button prev arrow"
      :class="{ disabled: currentPage < 2 }"
    >
      {{ '<' }}
    </div>
    <div
      v-for="page in displayedPages"
      class="pagination-button"
      @click="changePage(page)"
      :class="{ active: page === currentPage }"
    >
      {{ page }}
    </div>
    <div
      @click="changePage(currentPage + 1)"
      class="pagination-button next arrow"
      :class="{ disabled: currentPage === totalPages }"
    >
      {{ '>' }}
    </div>
    <div
      @click="changePage(totalPages)"
      class="pagination-button last-arrow-button arrow"
      :class="{
        disabled: currentPage === totalPages
      }"
    >
      {{ '>>' }}
    </div>
  </div>
</template>

<style scoped>
.pagination-button {
  cursor: pointer;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 0.5rem;
  background-color: #0097a7;
  color: white;
}

.pagination-button.active {
  background-color: rgb(115, 115, 115);
  pointer-events: none;
}

.disabled {
  display: none;
}

.arrow {
  background-color: rgb(82, 82, 82);
}

@media (max-width: 580px) {
  .first-arrow-button {
    display: none;
  }
  .last-arrow-button {
    display: none;
  }
}
</style>
