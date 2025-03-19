import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios  from 'axios'
import { useToast } from 'vue-toastification';

export const useEventDateStore = defineStore('eventer', () => {
 const events = ref([])
 const toast = useToast()
 const hours = ref(['8','9','10','11','12','13','14','15','16'])
 const days = ref(['hétfő','kedd','szerda','csütörtök','péntek'])
  const loadAll = () =>{
    fetch("http://localhost:3000/events")
    .then(resp => resp.json())
    .then(data => events.value = data)
  }
  const filter = () =>{

    console.log("dsf")
    for ( let i = 0; i < events.lenght; i++){
      if(hours.includes(events[i].appointmentHour) && days.includes(events[i].appointmentDay)) {
        delete hours.value.find((e)=> e == events[i].appointmentHour)
        delete days.value.find((e)=> e == events[i].appointmentDay)
        toast("Sikeres szűrés")
      }}
     
    /*events.forEach((element) => {
      if(hours.includes(element.appointmentHour) && days.includes(element.appointmentDay)) {
        delete hours.value.find((e)=> e == element.appointmentHour)
        delete days.value.find((e)=> e == element.appointmentDay)
      }
    });*/
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

  return { events, hours,days,loadAll, saveEvent, filter }
})
