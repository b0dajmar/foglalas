<template>
    <form @submit.prevent="events.saveEvent(event)">
        <label for="nev">Név:</label>
        <input type="text" v-model="event.name" id="nev">
        <label for="tel">Telefonszám:</label>
        <input type="text" v-model="event.phoneNumber" id="tel">
        <label for="orak">Mikor:</label>
        <select v-model="event.appointmentHou" id="orak">
            <option v-for="ora, index in hours" :key="index">{{ ora }}</option>
        </select>
        <label for="napok">Melyik nap:</label>
        <select v-model="event.appointmentDay" id="napok">
            <option v-for="nap, index in days" :key="index">{{ nap }}</option>
        </select>
        <input type="submit" value="Mentés">
    </form>
</template>

<script setup>
    import {ref} from'vue'
    import { useEventDateStore } from '@/stores/eventDate';

    const events = useEventDateStore()
    const hours = ref(['8','9','10','11','12','13','14','15','16'])
    const days = ref(['hétfő','kedd','szerda','csütörtök','péntek'])
    const event = ref({
        "name": "",
        "phoneNumber": "",
        "appointmentDay":"",
        "appointmentHour":""
    })
</script>