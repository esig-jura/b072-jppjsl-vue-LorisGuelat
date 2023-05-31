<script setup>
import {RouterView} from "vue-router";
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<template>
    <PageHeader></PageHeader>
    <router-view></router-view>
    <page-footer></page-footer>
</template>

<style scoped>
</style>
