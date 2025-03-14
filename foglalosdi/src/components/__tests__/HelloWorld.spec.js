import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NewView from '@/views/NewView.vue'
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
