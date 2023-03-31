<script setup lang="ts">

/*Call Components*/
import { computed } from 'vue';

import Demographics from '@/components/dashboard/Demographics.vue';
import YearlyBreakup from '@/components/dashboard/YearlyBreakup.vue';
import MonthlyEarning from '@/components/dashboard/MonthlyEarnings.vue';
import Cardsapps from '@/components/dashboard/Cardsapps.vue';
import SalesOverview from '@/components/dashboard/SalesOverview.vue';

import RecentTransaction from '@/components/dashboard/RecentTransaction.vue';

import ProductPerformance from '@/components/dashboard/ProductPerformance.vue';
import ProductCards from '@/components/dashboard/ProductCards.vue';




const data = {
    links: [
        'Overview',
        'Analitics',
        'Posts',
        'Audience',
    ]
};


</script>

<template>
    <v-app id="inspire">
        <v-app-bar class="px-3" color="white" flat density="compact">
            <v-avatar color="grey-darken-1" size="32"></v-avatar>

            <v-spacer></v-spacer>

            <!-- <v-tabs centered color="grey-darken-2">
                    <v-tab v-for="link in data.links" :key="link">
                        {{ link }}
                    </v-tab>
                </v-tabs> -->
            <v-spacer></v-spacer>

            <v-avatar class="hidden-sm-and-down" color="grey-darken-1" size="32"></v-avatar>
        </v-app-bar>

        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="12" sm="4">
                        <v-sheet rounded="lg" min-height="268">
                            <p class="text-h6">View Connections</p>
                            <Cardsapps />
                        </v-sheet>
                    </v-col>

                    <v-col cols="12" sm="8">
                        <v-sheet min-height="70vh" rounded="lg">

                            <v-container>

                                <v-col cols="12" sm="12">
                                    <v-avatar size="140">

                                        <img class="avatar-image"
                                            src="https://izea-marketplace-prod.imgix.net/34oplig4kdgo2jnz5cjdp3wz79ds?ixlib=rails-4.2.0&w=126&h=126&auto=format&mask=ellipse&dpr=1&q=75"
                                            height="100" width="100" alt="avatar">

                                    </v-avatar>
                                    <span style="margin-left: 2%;" slot="tile">
                                        <v-list-tile-content>
                                            <v-list-tile-title class="text-h6">Braxton Miller

                                            </v-list-tile-title>
                                        </v-list-tile-content>
                                    </span>
                                </v-col>

                            </v-container>
                            <v-tabs centered color="grey-darken-2">
                                <v-tab v-for="link in data.links" :key="link">
                                    {{ link }}
                                </v-tab>
                            </v-tabs>
                            <v-row class="d-flex mb-1">

                                <v-col cols="3" sm="4">
                                    <v-card class="v-card--reveal" elevation=" 4" width="250">
                                        <v-card-text>
                                            <div>FOLLOWERS
                                            </div>
                                            <p class="text-h4 text--primary">
                                                407.9k
                                            </p>

                                        </v-card-text>
                                    </v-card>


                                </v-col>

                                <v-col cols="3" sm="4">
                                    <v-card class="v-card--reveal" elevation=" 4" width="250">
                                        <v-card-text>
                                            <div>AVG. ENG. PER POST
                                            </div>
                                            <p class="text-h4 text--primary">
                                                168.5
                                            </p>

                                        </v-card-text>
                                    </v-card>


                                </v-col>
                                <v-col cols="3" sm="4">
                                    <v-card class="v-card--reveal" elevation=" 4" width="250">
                                        <v-card-text>
                                            <div>ENG. RATE
                                            </div>
                                            <p class="text-h4 text--primary">
                                                0.08%
                                            </p>

                                        </v-card-text>
                                    </v-card>

                                </v-col>
                            </v-row>
                        </v-sheet>
                    </v-col>


                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
  
<style lang="scss">
.container {
    justify-content: center;
    height: 7vh;

}


.avatar-image {
    width: 100%;

    height: auto;
}

.avatar-group {
    position: relative;
    margin-top: -10%;
    margin-left: 15%;
    /* Hace que la posición absoluta de los avatares sea relativa a este contenedor */
}

.avatar {
    position: absolute;
    /* Hace que los avatares sean posicionados de forma absoluta */
    border: 2px;
    /* Añade un borde blanco para resaltar cada avatar */
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
    /* Añade una sombra para dar profundidad */
}

.avatar-1 {
    top: 0;
    left: 0;
}

.avatar-2 {
    top: 0px;
    left: 25px;
}

.avatar-3 {
    top: 0px;
    left: 50px;
}
</style>
