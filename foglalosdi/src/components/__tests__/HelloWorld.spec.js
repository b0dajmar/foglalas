import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NewView from '@/views/NewView.vue'
import HomeView from '@/views/HomeView.vue'
import { useEventDateStore } from '@/stores/eventDate'


it('Mentés',() =>{
  const event = ref({
    "name": "",
    "phoneNumber": "",
    "appointmentDay":"",
    "appointmentHour":""
})
  const ev = useEventDateStore()
  ev.saveEvent(event)
  expect(ev.events()).toContain(event)

})
it('Tartalom ellnőrzés',() =>{
  const  wrapper = mount(HomeView)
  expect(wrapper.text()).toContain('Foglalt Időpontok')

})
it('Tartalom ellnőrzés 2',() =>{
  const  wrapper = mount(NewView)
  expect(wrapper.text()).toContain('Időpont Foglalása')

})
