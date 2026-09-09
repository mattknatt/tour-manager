<script setup>
import { ref } from 'vue'
import { tourDates } from '@/data/tour-dates';


</script>

<template>
    <section class="upcoming-shows">
<h2>Upcoming Shows</h2>
<ul>
    <li v-for="date in tourDates">{{ date.date.toLocaleDateString() }} - {{ date.venue }} - {{ date.city }}</li>
</ul>
</section>
</template>

<style scoped>

</style>