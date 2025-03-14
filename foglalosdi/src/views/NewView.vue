<template>
    <form @submit.prevent="savePrep()">
        <label for="nev">Név:</label>
        <input type="text" v-model="event.name" id="nev">
        <label for="tel">Telefonszám:</label>
        <input type="text" v-model="event.phoneNumber" id="tel">
        <label for="orak">Mikor:</label>
        <select v-model="event.appointmentHour" id="orak">
            <option v-for="ora, index in events.hour" :key="index">{{ ora }}</option>
        </select>
        <label for="napok">Melyik nap:</label>
        <select v-model="event.appointmentDay" id="napok">
            <option v-for="nap, index in events.days" :key="index">{{ nap }}</option>
        </select>
        <input type="submit" value="Mentés">
    </form>
</template>

<script setup>
    import {ref} from'vue'
    import { useEventDateStore } from '@/stores/eventDate';
    const savePrep = () =>{
        if(event.name != null && event.phoneNumber != null && event.appointmentDay != null && event.appointmentHour != null){
            events.saveEvent(event)
        }
        else{
            console.log('Needs some bread!["Minden mezőt ki kell tölteni"]')
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