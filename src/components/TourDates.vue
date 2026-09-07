<script setup>
import { ref } from 'vue'

const showForm = ref(false)
const newDate = ref('')
const newCity = ref('')
const newVenue = ref('')

const tourDates = ref([
    {
        date: '2026-10-01',
        venue: 'The Baked Potato',
        city: 'Los Angeles'
    },
    {
        date: '2026-10-02',
        venue: 'House of Blues',
        city: 'Anaheim'
    },
    {
        date: '2026-10-03',
        venue: 'Madison Square Garden',
        city: 'New York'
    }
])

function addTourdate() {
    tourDates.value.push({
        date: newDate.value,
        venue: newVenue.value,
        city: newCity.value
    })
    showForm.value = false

    newDate.value = ''
    newVenue.value = ''
    newCity.value = ''
}

</script>

<template>
    <div class="dates">
        <ul>
            <li v-for="tourDate in tourDates">{{ tourDate.date }}, {{ tourDate.venue }}, {{ tourDate.city }}</li>
        </ul>
    </div>
    <button @click="showForm = true">Add tour date</button>
    <div class="dateForm">
        <form v-if="showForm" @submit.prevent="addTourdate">
            <label>Date</label><input type="text" v-model="newDate">
            <label>Venue</label><input type="text" v-model="newVenue">
            <label>City</label><input type="text" v-model="newCity">
            <button>Submit</button>
        </form>
    </div>
</template>

<style scoped>
.dates {
    display: block;
    margin: 0 auto;
    background-color: white;
    max-width: 70%;
    border-radius: 15px;
}

ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr;
    padding: 15px;
}

ul li {
    padding: 10px;
    border: 1px solid black;
}


</style>
