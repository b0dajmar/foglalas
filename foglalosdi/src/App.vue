<script setup>
import { onMounted } from 'vue';
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
    <div class="container">
      <nav class="text-center">
        <RouterLink class="btn btn-outline-success m-2" to="/">Időpontok</RouterLink>
        <RouterLink class="btn btn-outline-success m-2" to="/new">Foglalás</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

