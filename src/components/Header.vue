<template>
    <nav>
        <RouterLink class="menuitem" to="/">Home</RouterLink>
        <RouterLink class="menuitem" to="/dates">Dates</RouterLink>
        <RouterLink class="menuitem" to="/members">Members</RouterLink>
    </nav>

</template>

<style scoped>
nav {
    display: flex;
    flex-direction: column;
    font-size: 20px;
}

.menuitem {
    color: black;
    text-decoration: none;
    flex: 1;
    text-align: center;
}

@media screen and (min-width: 768px) {

    nav {
        flex-direction: row;
    }
}
</style>