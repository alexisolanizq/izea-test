<script setup lang="ts">
import { productsCard } from '@/data/dashboard/dashboardData';
import Listing from '@/assets/images/products/listing1.png';


</script>
<template>
    <v-card elevation="10" class="withbg">
        <v-card-item class="pb-0">
            <v-card-title class="text-h5 pt-sm-2">Listings

            </v-card-title>
            <v-row class="d-flex mb-1">


                <v-col cols="12" sm="6">
                    <v-card max-width="400">
                        <v-img class="my-cardcenter">

                            <img src="@/assets/images/products/listing1.png" height="250" class="my-cardcenter"
                                alt="user" />
                        </v-img>



                        <v-card-text>
                            <div>Instagram</div>

                            <div>Unique Instagram post from @braxtonmiller</div>


                        </v-card-text>


                    </v-card>

                </v-col>

            </v-row>
        </v-card-item>
    </v-card>
</template>

<style>
.my-cardcenter {
    margin-left: 5%;
    border-radius: 5%;
}
</style>
