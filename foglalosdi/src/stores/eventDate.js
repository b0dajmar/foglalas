import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios  from 'axios'

export const useEventDateStore = defineStore('eventer', () => {
 const events = ref([])
 const hours = ref(['8','9','10','11','12','13','14','15','16'])
 const days = ref(['hétfő','kedd','szerda','csütörtök','péntek'])
  const loadAll = () =>{
    fetch("http://localhost:3000/events")
    .then(resp => resp.json())
    .then(data => events.value = data)
  }
  const filter = () =>{
    events.forEach(element => {
      if(hours.includes(element.appointmentHour) && days.includes(element.appointmentDay)) {
        delete hours.value.find((e)=> e == element.appointmentHour)
        delete days.value.find((e)=> e == element.appointmentDay)
      }
    });
  }
  

  const saveEvent = (e) => {
    console.log(e)
    if(events.value.includes(e.appointmentDay))
    events.value.push(e)
    axios.post("http://localhost:3000/events",e)
    .then(resp => {
      console.log(resp.statusText)
      toast("Sikeres mentés");
    })
    .catch(() => toast.error("Hiba"))
  }

  return { events, loadAll, saveEvent, filter }
})
