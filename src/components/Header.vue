<template>
    <nav>
        <RouterLink class="menuitem" to="/">Home</RouterLink>
        <RouterLink class="menuitem" to="/dates">Schedule</RouterLink>
    </nav>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
nav {
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    font-size: 16px;
    background-color: antiquewhite;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    overflow: hidden;
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
    background-color: rgba(111, 29, 29, 0.06);
}

.menuitem.router-link-active {
    color: var(--accent);
    font-weight: 700;
}

@media screen and (min-width: 768px) {

   
}
</style>