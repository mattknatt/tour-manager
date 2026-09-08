<script setup>
import { ref } from 'vue'
import { tourDates } from '@/data/tour-dates';

const today = tourDates.value[0]
console.log(today)
</script>

<template>
    <div class="wrapper">
        <section class="today">
            <h2>Todays show: </h2>
            <article class="today-head">
                <p>{{ today.date }} - {{ today.venue }} - {{ today.city }}</p>
            </article>
            <ul>
                <li v-for="member in today.members">{{ member }}</li>
            </ul>
        </section>
    </div>
</template>

<style scoped>
.wrapper {
    display: block;
    margin: 0 auto;
    width: 70%;
    border: 2px solid black;
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
}

.today ul {
    list-style-type: none;
    padding: 0;
}
</style>