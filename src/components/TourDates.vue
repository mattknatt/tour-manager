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
        id: tourDates.value.length === 0 ? 1 : Math.max(...tourDates.value.map(tourDate => tourDate.id)) + 1,
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
    <h1>Schedule</h1>
    <div class="dates">
        <ul>
            <li :class="{cancelled : tourDate.isCancelled}" v-for="tourDate in tourDates" :key="tourDate.id">
                {{ tourDate.date.toLocaleDateString() }}, {{ tourDate.venue }}, {{ tourDate.city }}
                <div class="actions">
                    <button @click="removeTourdate(tourDate.id)">Remove</button>
                    <button v-if="!tourDate.isCancelled" @click="cancelShow(tourDate.id)">Cancel show</button>
                    <p v-else>Cancelled</p>
                </div>
            </li>
        </ul>
    </div>
    <button v-if="!showForm" @click="showForm = true">Add tour date</button>
    <h2 v-else>New tour date</h2>
    <div class="dateForm">
        <form v-if="showForm" @submit.prevent="addTourdate">
            <ul>
                <li><label>Date</label><input type="date" v-model="newDate"></li>
                <li><label>Venue</label><input type="text" v-model="newVenue"></li>
                <li><label>City</label><input type="text" v-model="newCity"></li>
                <li>
                    <label>Members</label>
                    <input type="text" v-model="newMember">
                </li>
            </ul>
            <div class="added-members" v-if="newMembers.length > 0">
                <ul>
                    <li v-for="member in newMembers"> {{ member }}</li>
                </ul>
            </div>
            <button class="member-button" type="button" @click="addMember">Add member</button>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<style scoped>
.cancelled {
    color: var(--danger);
    font-style: italic;
}
.dates {
    display: block;
    margin: 0 auto;
    background-color: var(--surface);
    max-width: 700px;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    margin-bottom: 30px;
}

h2 {
    margin-bottom: 0;
}

.dates li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.dates button {
    padding: 4px 12px;
    font-size: 14px;
}

.actions {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    flex-shrink: 0;
}

.added-members {   
    color: var(--accent);
}

.added-members ul {
    display: flex;
    flex-direction: column;
    align-items: center;
}

ul {
    display: flex;
    flex-direction: column;
    padding: 8px 20px;
}

.dates ul li {
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
}

.dates ul li:last-child {
    border-bottom: none;
}

button {
    display: block;
    margin: 0 auto;
}

.dateForm {
    display: block;
    margin: 24px auto 0;
    max-width: 420px;
    padding: 10px;
}

.dateForm li {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
}

.dateForm input {
    flex: 1;
}

.dateForm label {
    display: inline-block;
    width: 80px;
    padding: 10px;
}

.added-members li {
    border: 1px solid;
    padding: 5px;
    border-radius: 10px;
    background-color: var(--surface);
}

.member-button{
    flex-shrink: 0;
    font-size: 14px;
    margin-bottom: 10px;
}

@media screen and (min-width: 768px) {
.dates li {
    flex-direction: row;

}

.actions {
    margin-left: auto;
}

.added-members ul{
    flex-direction: row;
    justify-content: center;
    gap: 12px;
}


}
</style>
