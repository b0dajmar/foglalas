<script setup>

import { useEventDateStore } from '@/stores/eventDate';
 const eventStore = useEventDateStore()
</script>

<template>
 <div>
  <label>Foglalt [Placeholder] időpontok </label>
  <div v-for="e in eventStore.events" :key="e.id">
    <div>{{ e.name }}</div>
    <div>{{ e.phoneNumber }}</div>
    <div>{{ e.appointmentHour }}</div>
    <div>{{ e.appointmentDay }}</div>
  
    
  </div>

 </div>
</template>
