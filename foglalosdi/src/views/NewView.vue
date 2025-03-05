<template>
    <form @submit.prevent="events.">
        <input type="text" v-model="event.name">
        <input type="text" v-model="event.phoneNumber">
        <input type="submit" value="Menté">
    </form>
</template>

<script setup>
    import {ref} from'vue'
    import { useEventDateStore } from '@/stores/eventDate';

    const events = useEventDateStore()
    const event = ref({
        "name": "",
        "phoneNumber": ""
    })
</script>