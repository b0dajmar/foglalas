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

  const saveProduct = (e) => {
    console.log(e)
    //let id = Math.round(Math.random() * 1000000000)
    products.value.push(e)
    axios.post("http://localhost:3000/events",e)
    .then(resp => {
      console.log(resp.statusText)
      toast("Sikeres mentés");
    })
    .catch(() => toast.error("Hiba"))
  }

  return { events, loadAll, newAppointment, saveProduct }
})
