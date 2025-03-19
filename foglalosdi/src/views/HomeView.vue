<script setup>

import { useEventDateStore } from '@/stores/eventDate';
 const eventStore = useEventDateStore()
</script>

<template>
  <h1 class="text-center">DR Herrman online időpont folalása</h1>
  <h2 class="text-center">Foglalt Időpontok</h2>
  <body>
 <div class="row">
  <div v-for="e in eventStore.events" :key="e.id" class="card col-12 col-md">
    <div class="card-title text-center">{{ e.name }}</div>
    <div class="text-center"> nap: {{ e.appointmentDay }}</div>
    <div class="text-center"> óra: {{ e.appointmentHour }}</div>
    <div class="text-center"> tel: {{ e.phoneNumber }}</div>
   
  
    
  </div>

 </div>
 </body>
</template>
<style scoped>
    body{
        background-image: url("@/assets/sadman.jpg");
        background-size: cover;  
        padding: 10%;
        padding-bottom: 15%;
       
    }
    .row{
      padding: 10%;
    }
</style>
