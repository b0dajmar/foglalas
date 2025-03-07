<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useEventDateStore } from '@/stores/eventDate';

const eventStore = useEventDateStore()

onMounted(()=>{
  eventStore.loadAll()
  eventStore.filter()

})
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/"></RouterLink>
        <RouterLink to="/new"></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

