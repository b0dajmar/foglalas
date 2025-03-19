<template>
    <body>

    <h1 class="text-center">Időpont Foglalása</h1>
    <form @submit.prevent="savePrep(event)" class="w-50 mx-auto">
        <label for="nev">Név:</label>
        <input type="text" v-model="event.name" id="nev" class="form-control">
        <label for="tel">Telefonszám:</label>
        <input type="number" v-model="event.phoneNumber" id="tel" class="form-control">
        <label for="orak" >Mikor:</label>
        <select v-model="event.appointmentHour" id="orak" class="form-control">
            <option v-for="ora, index in events.hours" :key="index">{{ ora }}</option>
        </select>
        <label for="napok">Melyik nap:</label>
        <select v-model="event.appointmentDay" id="napok" class="form-control">
            <option v-for="nap, index in events.days" :key="index">{{ nap }}</option>
        </select>
        <input type="submit" value="Mentés" class="form-control btn btn-outline-success m-2">
    </form>
    </body>
</template>

<script setup>
    import {ref} from'vue'
    import { useEventDateStore } from '@/stores/eventDate';
    import { useToast } from 'vue-toastification';
    
    const toast = useToast()
  
    
    //const hours = ref(['8','9','10','11','12','13','14','15','16'])
    //const days = ref(['hétfő','kedd','szerda','csütörtök','péntek'])
    const savePrep = (event) =>{
        if(event.name != "" && event.phoneNumber != "" && event.appointmentDay != "" && event.appointmentHour != ""){
            
            events.saveEvent(event)
            console.log(event.name)
        }
        else{
            console.log('Needs some bread!["Minden mezőt ki kell tölteni"]')
            toast.error("Minden mezőt ki kell tölteni")
        } 
       }
    const events = useEventDateStore()
    
    const event = ref({
        "name": "",
        "phoneNumber": "",
        "appointmentDay":"",
        "appointmentHour":""
    })
</script>
<style scoped>
    body{
        background-image: url("@/assets/win.jpg");
        background-size: cover;  
        padding: 10%;
        padding-bottom: 15%;  
        margin-left: 10%;
        margin-right: 10%; 
        
    }
    .row{
      padding: 10%;
    }
   
</style>