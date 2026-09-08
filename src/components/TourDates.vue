<script setup>
import { ref } from 'vue'
import { tourDates } from '@/data/tour-dates'

const showForm = ref(false)
const newDate = ref('')
const newCity = ref('')
const newVenue = ref('')



function addTourdate() {
    tourDates.value.push({
        id: tourDates.value[tourDates.value.length - 1].id + 1,
        date: newDate.value,
        venue: newVenue.value,
        city: newCity.value
    })
    showForm.value = false

    newDate.value = ''
    newVenue.value = ''
    newCity.value = ''

    console.log(tourDates.value)
}

function removeTourdate(id) {
    const index = tourDates.value.findIndex(tourDate => tourDate.id === id)

    tourDates.value.splice(index, 1)
}


</script>

<template>
    <div class="dates">
        <ul>
            <li v-for="tourDate in tourDates" :key="tourDate.id">
                {{ tourDate.date }}, {{ tourDate.venue }}, {{ tourDate.city }}
                <button @click="removeTourdate(tourDate.id)">Remove</button>
            </li>
        </ul>
    </div>
    <button @click="showForm = true">Add tour date</button>
    <div class="dateForm">
        <form v-if="showForm" @submit.prevent="addTourdate">
            <ul>
                <li><label>Date</label><input type="text" v-model="newDate"></li>
                <li><label>Venue</label><input type="text" v-model="newVenue"></li>
                <li><label>City</label><input type="text" v-model="newCity"></li>
                <button>Submit</button>
            </ul>
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

.dates li {
    display: flex;
}

.dates button {
    display: block;
    margin-left: auto;
    margin-right: 10px;
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

button {
    display: block;
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;


}

.dateForm label {
    display: inline-block;
    width: 60px;
}
</style>
