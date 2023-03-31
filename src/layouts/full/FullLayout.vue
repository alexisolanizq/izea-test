<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { RouterView } from 'vue-router';
import MainView from './Main.vue';
import { fetchUserDataByVanityName } from '@/helpers/userData';
const userData = ref({
    first_name: '',
    last_name: '',
    profile_image: '',
    networks: [{
        followers: 0
    }],
    question_text: '',
    country: '',
});
onMounted(() => {
    const user = JSON.parse(window.localStorage.getItem('user') ?? '');
    userData.value = user;
    console.log(user);
    
    fetchUserDataByVanityName(user?.meta_info?.vanity_name).then((response) => {
        console.log(response);
    });
});
const getTotalFollowers = computed(() => {
    let total = 0 
    userData.value.networks?.forEach((element) => {
        total = total + element.followers
    });
    return total;
});
</script>

<template>
    <v-locale-provider>
        <v-app>
            <MainView />

            <v-main class="bg-grey100 mt-6 mr-0">
                <v-container fluid>
                    <v-row>
                        <v-col cols="12" sm="3">
                            <v-sheet rounded="md">
                                <v-container class="d-flex flex-column">
                                    <div class="d-flex justify-center">
                                        <v-avatar
                                            class="mb-6"
                                            :image="`https://sandbox.core.api.brandme.la${userData.profile_image}`"
                                            color="info"
                                            size="120"
                                        />
                                    </div>
                                    <div class="mb-6 text-center">
                                        <div class="text-h3">{{ userData.first_name }} {{ userData.last_name }}</div>
                                        <div>{{ getTotalFollowers }} seguidores</div>
                                    </div>
                                    <div class="">
                                        <p class="font-weight-medium">Acerca de mí</p>
                                        <p class="text-left">{{ userData.question_text }}</p>
                                    </div>
                                    <v-divider :thickness="3" class="my-3"/>
                                    <div class="mb-6">
                                        <p class="font-weight-medium">Localidad</p>
                                        <p class="text-left">{{ userData.country }}</p>
                                    </div>
                                </v-container>
                            </v-sheet>
                        </v-col>
                        <v-col cols="12" sm="9">
                            <v-sheet rounded="md">
                                <RouterView />
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
