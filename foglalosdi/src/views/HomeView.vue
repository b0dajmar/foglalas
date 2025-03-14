<script setup>

import { useEventDateStore } from '@/stores/eventDate';
 const eventStore = useEventDateStore()
</script>

<template>
  <h1 class="text-center">Foglalt Időpontok</h1>
 <div class="row">
  <div v-for="e in eventStore.events" :key="e.id" class="card col-12 col-md">
    <div class="card-title text-center">{{ e.name }}</div>
    <div class="text-center"> nap: {{ e.appointmentDay }}</div>
    <div class="text-center"> óra: {{ e.appointmentHour }}</div>
    <div class="text-center"> tel: {{ e.phoneNumber }}</div>
   
  
    
  </div>

 </div>
</template>
