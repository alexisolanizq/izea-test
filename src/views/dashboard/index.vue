<script setup lang="ts">
/*Call Components*/
import { onMounted, ref, computed } from 'vue';
import { getRelationshipStatus, getGender, getScolarship, getLanguage, getPets } from '@/helpers/getValues';
import type { userMetaData } from '@/types/common/common';
const scroll = ref(0);
const isLoading = ref(true);
const userData = ref<userMetaData>({
    gender: '',
    age: 0,
    ethnicity: '',
    relationship: '',
    languages: '',
    pets: '',
    children: '',
    scolarship: ''
});
const socialMedia = ref([]);
const onscroll = () => {
    scroll.value++;
};
onMounted(() => {
    if (window.localStorage.getItem('user_token')) {
        const { meta_info, proposals, networks } = JSON.parse(window.localStorage.getItem('user') ?? '');
        socialMedia.value = networks;
        console.log(networks);

        isLoading.value = false;
        userData.value = { ...proposals, ...meta_info };
        console.log(userData.value);
    }
});
const relationship = computed(() => {
    return getRelationshipStatus(userData.value.relationship);
});
const gender = computed(() => {
    return getGender(userData.value.gender);
});
const scolarship = computed(() => {
    return getScolarship(userData.value.scolarship);
});
const language = computed(() => {
    return getLanguage(userData.value.languages);
});
const pets = computed(() => {
    return getPets(userData.value.pets);
});
</script>

<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" sm="8">
                <v-card :loading="isLoading" v-scroll.self="onscroll" class="overflow-y-auto">
                    <v-card-text>
                        <div>
                            <p class="text-h4 text-left mb-8">Datos demográficos</p>
                            <v-row>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Genero</p>
                                    <p>{{ gender }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Edad</p>
                                    <p>{{ userData.age }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Etnia</p>
                                    <div>
                                        <p v-for="etnia in userData.ethnicity" :key="etnia">{{ etnia }} <br /></p>
                                    </div>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Estado civil</p>
                                    <p>{{ relationship }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Educación</p>
                                    <p>{{ scolarship }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Idiomas</p>
                                    <p>{{ language }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Mascotas</p>
                                    <p>{{ pets }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Hijos</p>
                                    <p>{{ userData.children ?? '----' }}</p>
                                </v-col>
                            </v-row>
                        </div>
                        <div>
                            <p class="text-h4 text-left mb-8">Datos analíticos</p>
                            <v-row>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Genero</p>
                                    <p>{{ gender }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Edad</p>
                                    <p>{{ userData.age }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Etnia</p>
                                    <div>
                                        <p v-for="etnia in userData.ethnicity" :key="etnia">{{ etnia }} <br /></p>
                                    </div>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Estado civil</p>
                                    <p>{{ relationship }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Educación</p>
                                    <p>{{ scolarship }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Idiomas</p>
                                    <p>{{ language }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Mascotas</p>
                                    <p>{{ pets }}</p>
                                </v-col>
                                <v-col cols="6">
                                    <p class="font-weight-bold">Hijos</p>
                                    <p>{{ userData.children ?? '----' }}</p>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card :loading="isLoading" v-scroll.self="onscroll" class="overflow-y-auto">
                    <v-card-text>
                        <p class="text-h4 text-center">Redes sociales</p>
                        <div v-if="socialMedia" class="d-flex flex-row flex-wrap justify-space-around align-center py-8">
                            <div v-for="{ uuid, avatar, username, network } in socialMedia" class="mb-4 px-4 py-4 rounded-lg" :key="uuid">
                                <v-card class="d-flex flex-column align-center pa-3 text-wrap">
                                    <v-avatar>
                                        <v-img :src="`https://sandbox.core.api.brandme.la${avatar}`" />
                                    </v-avatar>
                                    <div class="font-weight-bold">
                                        {{ username }}
                                    </div>
                                    <div>
                                        {{ network }}
                                    </div>
                                </v-card>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- <div class="container">
        <div class="scrollable-column" ref="scrollableColumn">

            <Demographics />
            <YearlyBreakup />

            <ProductCards />
        </div>
        <div class="fixed-column">
            <Cardsapps />
            <MonthlyEarning />
            <YearlyBreakup />
            <SalesOverview />


        </div>

    </div> -->
</template>

<style>
.container {
    display: flex;
}

.fixed-column {
    flex: 0 0 auto;
    width: 320px;
    padding: 1%;
    /* Ancho deseado de la columna fija */
}

.scrollable-column {
    overflow: auto;
    height: 1220%;
    background-color: lightgray;
}
</style>
