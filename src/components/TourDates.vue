<script setup>
import { ref } from 'vue'
import { tourDates } from '@/data/tour-dates'

const showForm = ref(false)
const newDate = ref()
const newCity = ref('')
const newVenue = ref('')
const newMember = ref('')
const newMembers= ref([])

tourDates.value.sort((a, b) => a.date - b.date)

function addTourdate() {

    tourDates.value.push({
        id: tourDates.value[tourDates.value.length - 1].id + 1,
        date: new Date(newDate.value),
        venue: newVenue.value,
        city: newCity.value,
        members: newMembers.value,
        isCancelled: false
    })
    showForm.value = false

    tourDates.value.sort((a, b) => a.date - b.date)

    newDate.value = ''
    newVenue.value = ''
    newCity.value = ''
    newMembers.value = []

    console.log(tourDates.value)
}

function addMember() {
    if (newMember.value.trim() !== '') {
        newMembers.value.push(newMember.value)
        newMember.value = ''
    }
}

function removeTourdate(id) {
    const index = tourDates.value.findIndex(tourDate => tourDate.id === id)

    tourDates.value.splice(index, 1)
}

function cancelShow(id) {
    const tourDate = tourDates.value.find(
        tourDate => tourDate.id === id
    )

    tourDate.isCancelled = true
}



</script>

<template>
    <h2>Tour Schedule</h2>
    <div class="dates">
        <ul>
            <li :class="{cancelled : tourDate.isCancelled}" v-for="tourDate in tourDates" :key="tourDate.id">
                {{ tourDate.date.toLocaleDateString() }}, {{ tourDate.venue }}, {{ tourDate.city }}
                <button @click="removeTourdate(tourDate.id)">Remove</button>
                <button v-if="!tourDate.isCancelled" @click="cancelShow(tourDate.id)">Cancel show</button>
                <p v-else>Cancelled</p>
            </li>
        </ul>
    </div>
    <button @click="showForm = true">Add tour date</button>
    <div class="dateForm">
        <form v-if="showForm" @submit.prevent="addTourdate">
            <ul>
                <li><label>Date</label><input type="date" v-model="newDate"></li>
                <li><label>Venue</label><input type="text" v-model="newVenue"></li>
                <li><label>City</label><input type="text" v-model="newCity"></li>
                <li>
                    <label>Members</label>
                    <input type="text" v-model="newMember">
                    <button class="member-button" type="button" @click="addMember">Add member</button>
                </li>
                <button type="submit">Submit</button>
            </ul>
        </form>
    </div>
</template>

<style scoped>
.cancelled {

    color: red;
    font-style: italic;
}
.dates {
    display: block;
    margin: 0 auto;
    background-color: white;
    max-width: 70%;
    border-radius: 15px;
    margin-bottom: 30px;
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

.dates ul li {
    padding: 10px;
    border: 1px solid black;
}

button {
    display: block;
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;


}

.dateForm {
    display: block;
    margin: 0 auto;
    width: 30%;
    padding: 10px;
}

.dateForm label {
    display: inline-block;
    width: 80px;
    padding: 10px;
}

.member-button{
    margin-bottom: 20px;
}
</style>
