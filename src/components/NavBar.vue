<template>
    <v-row class="justify-center align-center">
        <router-link :to="{name:'Home'}" class="mx-2">Home</router-link>
        <span>|</span>
        <router-link :to="{name:'ShoppingList'}" class="mx-2">Shopping List</router-link>
        <span>|</span>
        <a href="https://laczek.com" class="mx-2">Laczek.com</a>
    </v-row> 
</template>