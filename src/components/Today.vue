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
        <section class="today" v-if="nextShow">
            <h2 v-if="isShowToday">Todays Show </h2>
            <h2 v-else>Next Show </h2>
            <article class="today-head">
                <p :class="{cancelled : nextShow.isCancelled}">{{ nextShow.date.toLocaleDateString() }} - {{ nextShow.venue }} - {{ nextShow.city }}</p>
            </article>
            <div class="band-members" v-if="!nextShow.isCancelled">
                <h3>Band members:</h3>
            <ul >
                <li v-for="member in nextShow.members" :key="member">{{ member }}</li>
            </ul>
        </div>
        <h2 class="cancelled" v-else>CANCELLED</h2>
        <article class="upcoming-shows">
            <h2>Upcoming Shows</h2>
            <ul>
                <li v-for="date in upcomingShows" :key="date.id">{{ date.date.toLocaleDateString() }} - {{ date.venue }} - {{ date.city }}
                </li>
            </ul>
        </article>
        </section>
        <h2 v-else>No upcoming shows!</h2>
    </div>
</template>

<style scoped>
.wrapper {
    display: block;
    margin: 0 auto;
    max-width: 700px;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background-color: var(--surface);
    box-shadow: var(--shadow);
    padding: 32px;
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
    max-width: 700px;
    margin-top: 64px;
}

.upcoming-shows li {
    padding: 12px 4px;
    border-bottom: 1px solid var(--border);
}

.upcoming-shows li:last-child {
    border-bottom: none;
}

.upcoming-shows h2 {
    text-align: center;
}

.cancelled {

    color: red;
    font-style: italic;
}
</style>