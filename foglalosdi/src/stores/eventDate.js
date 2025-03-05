import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios  from 'axios'

export const useEventDateStore = defineStore('eventer', () => {
 const events = ref([])
  const loadAll = () =>{
    fetch("http://localhost:3000/events")
    .then(resp => resp.json())
    .then(data => events.value = data)
  }
  const newAppointment = (id)=>{
    events.value[id] = events.value[id] ? events.value[id] + 1 : 1
  }

  return { events, loadAll, newAppointment }
})
