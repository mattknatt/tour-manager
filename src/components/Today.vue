<script setup>
import { ref, computed } from 'vue'
import { tourDates } from '@/data/tour-dates';

const today = ref(new Date())
const isShowToday = ref(false)
const nextShow = ref()

const upcomingShows = computed(() => {
    return tourDates.value.filter(date => date !== nextShow.value)

})

function findNextShow() {
    for (let i = 0; i < tourDates.value.length; i++) {

        if (tourDates.value[i].date.toLocaleDateString() === today.value.toLocaleDateString()) {
            isShowToday.value = true
            nextShow.value = tourDates.value[i]
            break
        } else if (tourDates.value[i].date.toLocaleDateString() > today.value.toLocaleDateString()) {
            nextShow.value = tourDates.value[i]
            break
        }
    }
    console.log(nextShow.value)
}

findNextShow();

</script>

<template>
    <h1>Tour Manager</h1>
    <div class="wrapper">
        <section class="today">
            <h2 v-if="isShowToday">Todays Show </h2>
            <h2 v-else="!isShowToday">Next Show </h2>
            <article class="today-head">
                <p :class="{cancelled : nextShow.isCancelled}">{{ nextShow.date.toLocaleDateString() }} - {{ nextShow.venue }} - {{ nextShow.city }}</p>
            </article>
            <ul v-if="!nextShow.isCancelled">
                <div class="band-members">
                    <h3>Band members:</h3>
                <li v-for="member in nextShow.members">{{ member }}</li>
                </div>
            </ul>
            <h2 class="cancelled" v-else>CANCELLED</h2>
        </section>
    </div>
    <section class="upcoming-shows">
        <h2>Upcoming Shows</h2>
        <ul>
            <li v-for="date in upcomingShows">{{ date.date.toLocaleDateString() }} - {{ date.venue }} - {{ date.city }}
            </li>
        </ul>
    </section>
</template>

<style scoped>
.wrapper {
    display: block;
    margin: 0 auto;
    width: 70%;
    border: 2px solid black;
    border-radius: 15px;
    background-color: beige;
    padding: 20px;
}

.today {
    display: grid;
    text-align: center;
}

.today-head {
    display: flex;
    flex-direction: row;
}

.today-head p {
    flex: 1;
    margin-bottom: 20px;
}

.today ul {
    list-style-type: none;
    padding: 0;
}

.upcoming-shows{
    display:block;
    margin: 0 auto;
    width: 40%;
    margin-top: 100px;
}

.upcoming-shows h2 {
    text-align: center;
}

.cancelled {

    color: red;
    font-style: italic;
}
</style>