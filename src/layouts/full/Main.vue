<script lang="ts" setup>
import ProfileDD from './vertical-header/ProfileDD.vue';
</script>

<template>
    <v-app-bar>
        <v-container class="fill-height d-flex align-center">
            <v-app-bar-title>
                <img src="../../assets/images/logos/logo.svg" alt="" />
            </v-app-bar-title>
            <v-spacer></v-spacer>
            <ProfileDD></ProfileDD>
        </v-container>
    </v-app-bar>
</template>
