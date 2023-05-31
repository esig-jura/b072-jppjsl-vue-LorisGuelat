<script setup>

</script>

<template>
    <header>
        <router-link class="active" to="/">
            <img src="/img/logo-jppjsl.png"
                 class="logo"
                 alt="Logo de J&#039;peux pas j&#039;ai sabre laser"
            >
        </router-link>
        <nav>
            <ul>
                <li><router-link class="active" to="/sabre/:id">Nos sabres</router-link></li>
                <li><router-link class="active" to="/service-client">Service-client</router-link></li>
            </ul>
        </nav>
    </header>

</template>

<style scoped>

</style>