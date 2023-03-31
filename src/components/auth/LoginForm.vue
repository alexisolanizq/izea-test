<script setup lang="ts">
import { ref } from 'vue';
import { fetchLogin } from '@/helpers/login';
import { router } from '@/router';
const checkbox = ref(false);
const snackbar = ref(false);
const isLoading = ref(false);
const error = ref('');
const userData = ref({
    email: 'creator_julio@yopmail.com',
    password: 'pass2018'
});
const rules = ref([
    (value: boolean) => {
        if (value) return true;
        return 'Campo requerido';
    }
]);

const sendData = () => {
    if (Object.entries(userData).length === 0) return;
    fetchLogin(userData.value)
        .catch((err) => {
            error.value = err;
            isLoading.value = false;
            snackbar.value = true;
        });
};
</script>

<template>
    <v-form @submit.prevent="sendData">
        <v-row class="d-flex mb-3">
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Username</v-label>
                <v-text-field :rules="rules" v-model="userData.email" variant="outlined" hide-details color="primary"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Password</v-label>
                <v-text-field
                    :rules="rules"
                    v-model="userData.password"
                    variant="outlined"
                    type="password"
                    hide-details
                    color="primary"
                ></v-text-field>
            </v-col>
            <v-col cols="12" class="pt-0">
                <div class="d-flex flex-wrap align-center ml-n2">
                    <v-checkbox v-model="checkbox" color="primary" hide-details>
                        <template v-slot:label>Remeber this Device</template>
                    </v-checkbox>
                    <div class="ml-sm-auto">
                        <RouterLink to="/" class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
                            >Forgot Password ?</RouterLink
                        >
                    </div>
                </div>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-btn type="submit" color="primary" size="large" block flat>Sign in</v-btn>
            </v-col>
        </v-row>
    </v-form>
    <v-snackbar v-model="snackbar" location="top" timeout="3000" color="error">
        <p v-if="error">
            {{ error }}
        </p>
        <template v-slot:actions>
            <v-btn color="red" variant="text" @click="snackbar = false"> x </v-btn>
        </template>
    </v-snackbar>
</template>
