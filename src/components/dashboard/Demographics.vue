<script setup lang="ts">
import { ref } from 'vue';
import { CircleIcon } from 'vue-tabler-icons';
import { recentTransaction } from '@/data/dashboard/dashboardData';
</script>
<template>
    <v-card elevation="10" class="withbg">
        <v-card-item class="pb-5">
            <v-card-title style="margin-bottom: 3%;" class="text-h8 pt-sm-5">Demographics
            </v-card-title>

            <v-row class="d-flex mb-1">
                <v-col cols="7" sm="6" class="pt-0">
                    <h6 class="text-body-1 textSecondary text-no-wrap">GENDER</h6>
                    <h6 class="text-body-1 font-weight-bold">Male</h6>
                    <h6 class="text-body-1 textSecondary text-no-wrap">ETHNICITY</h6>
                    <h6 class="text-body-1 font-weight-bold">Black / African American</h6>
                    <h6 class="text-body-1 textSecondary text-no-wrap">EDUCATION</h6>
                    <h6 class="text-body-1 font-weight-bold">Associate's Degree</h6>
                    <h6 class="text-body-1 textSecondary text-no-wrap">PETS</h6>
                    <h6 class="text-body-1 font-weight-bold">--</h6>

                </v-col>

                <v-col cols="7" sm="6" class="pt-0">
                    <h6 class="text-body-1 textSecondary text-no-wrap">AGE</h6>
                    <h6 class="text-body-1 font-weight-bold">--</h6>
                    <h6 class="text-body-1 textSecondary text-no-wrap">RELATIONSHIP STATUS</h6>
                    <h6 class="text-body-1 font-weight-bold">Single</h6>
                    <h6 class="text-body-1 textSecondary text-no-wrap">LANGUAGE</h6>
                    <h6 class="text-body-1 font-weight-bold">English</h6>
                    <h6 class="text-body-1 textSecondary text-no-wrap">CHILDREN</h6>
                    <h6 class="text-body-1 font-weight-bold">Male(In Elementary)</h6>


                </v-col>
            </v-row>
        </v-card-item>

        <v-card-item class="pb-0">
            <v-card-title class="text-h5 pt-sm-2">Analytics

            </v-card-title>
            <v-row class="d-flex mb-1">


                <v-col cols="3" sm="6">
                    <v-card class="v-card--reveal" elevation=" 4" width="250">
                        <v-card-text>
                            <div>ENG. RATE
                            </div>
                            <p class="text-h4 text--primary">
                                0.07%
                            </p>

                        </v-card-text>
                    </v-card>


                </v-col>
                <v-col cols="3" sm="6">
                    <v-card class="v-card--reveal" elevation=" 4" width="250">
                        <v-card-text>
                            <div>AVG. ENG. PER POST
                            </div>
                            <p class="text-h4 text--primary">
                                18
                            </p>

                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
<style>
.my-card {
    border-left: 5px solid red;
}
</style>
