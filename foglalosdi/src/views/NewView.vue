<template>
    <form @submit.prevent="events.saveEvent(event)">
        <label for="nev">Név:</label>
        <input type="text" v-model="event.name" id="nev">
        <label for="tel">Telefonszám:</label>
        <input type="text" v-model="event.phoneNumber" id="tel">
        <label for="orak">Mikor:</label>
        <select v-model="event.appointmentHou" id="orak">
            <option v-for="ora, index in events.hours" :key="index">{{ ora }}</option>
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

    const events = useEventDateStore()
    const event = ref({
        "name": "",
        "phoneNumber": "",
        "appointmentDay":"",
        "appointmentHour":""
    })
</script>