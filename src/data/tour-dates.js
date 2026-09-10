import { ref } from 'vue'

export const tourDates = ref([
  {
        id: 1,
        date: new Date('2026-10-01'),
        venue: 'The Baked Potato',
        city: 'Los Angeles',
        members: ['Robert Plant', 'Jimmy Page'],
        isCancelled: false
    },
    {
        id: 2,
        date: new Date('2026-10-02'),
        venue: 'House of Blues',
        city: 'Anaheim',
        members: ['John Bonham', 'John Paul Jones', 'Robert Plant', 'Jimmy Page'],
        isCancelled: false
    },
    {
        id: 3,
        date: new Date('2026-10-03'),
        venue: 'Madison Square Garden',
        city: 'New York',
        members: ['John Bonham', 'John Paul Jones', 'Robert Plant', 'Jimmy Page'],
        isCancelled: false
    },
    {
        id: 4,
        date: new Date('2026-10-04'),
        venue: 'Paradiso',
        city: 'Amsterdam',
        members: ['John Bonham', 'John Paul Jones', 'Robert Plant', 'Jimmy Page'],
        isCancelled: false
    },
    {
        id: 5,
        date: new Date('2026-10-05'),
        venue: 'Vega',
        city: 'Copenhagen',
        members: ['John Bonham', 'John Paul Jones', 'Robert Plant', 'Jimmy Page'],
        isCancelled: false
    }
])

