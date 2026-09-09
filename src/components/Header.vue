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
    font-size: 18px;
    background-color: antiquewhite;
}

.menuitem {
    font-family: Lato, sans-serif;
    color: black;
    text-decoration: none;
    flex: 1;
    text-align: center;
    text-transform: uppercase;
}

@media screen and (min-width: 768px) {

   
}
</style>