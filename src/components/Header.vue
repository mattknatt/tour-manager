<script setup>
import { ref, watchEffect } from 'vue'

const isDark = ref(false)

watchEffect(() => {
    document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<template>
    <nav>
        <RouterLink class="menuitem" to="/">Home</RouterLink>
        <RouterLink class="menuitem" to="/dates">Schedule</RouterLink>
        <button class="theme-toggle" @click="isDark = !isDark">
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
        </button>
    </nav>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
nav {
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    background-color: var(--nav-bg);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: background-color 0.2s ease;
}

.menuitem {
    font-family: Lato, sans-serif;
    color: var(--muted);
    text-decoration: none;
    flex: 1;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 14px 12px;
    transition: color 0.15s ease, background-color 0.15s ease;
}

.menuitem:hover {
    color: var(--accent);
    background-color: var(--accent-soft);
}

.theme-toggle {
    flex-shrink: 0;
    margin-right: 12px;
    padding: 6px 12px;
    font-size: 13px;
    white-space: nowrap;
}

.menuitem.router-link-active {
    color: var(--accent);
    font-weight: 700;
}

@media screen and (min-width: 768px) {

   
}
</style>