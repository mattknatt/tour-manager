import { ref } from 'vue'

export const tourDates = ref([
  {
        id: 1,
        date: '2026-10-01',
        venue: 'The Baked Potato',
        city: 'Los Angeles',
        members: ['Robert Plant', 'Jimmy Page']
    },
    {
        id: 2,
        date: '2026-10-02',
        venue: 'House of Blues',
        city: 'Anaheim',
        members: ['John Bonham', 'John Paul Jones', 'Robert Plant', 'Jimmy Page']
    },
    {
        id: 3,
        date: '2026-10-03',
        venue: 'Madison Square Garden',
        city: 'New York',
        members: ['John Bonham', 'John Paul Jones', 'Robert Plant', 'Jimmy Page']
    }
])

