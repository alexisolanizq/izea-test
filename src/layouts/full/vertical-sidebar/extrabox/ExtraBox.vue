<script setup lang="ts">
</script>

<template>
    <div class="container">
        <div class="centrado">



            <v-avatar style="margin-left: 25%;" size="140">
                <img class="avatar-image"
                    src="https://izea-marketplace-prod.imgix.net/34oplig4kdgo2jnz5cjdp3wz79ds?ixlib=rails-4.2.0&w=126&h=126&auto=format&mask=ellipse&dpr=1&q=75"
                    height="100" width="100" alt="avatar">
            </v-avatar>
            <br>
            <br>
            <div style="margin-top: -4%;" class="container">
                <p class="text-h4">
                    Braxton Miller
                </p>


            </div>
            <div class="container" style="margin-top: 8%;">

                <p style="margin-top: -15%;"
                    class="text-caption
                                                                                                                                                                                                                                    ">
                    882.6k Followers
                </p>

            </div>

            <div class="avatar-group">
                <div class="container">
                    <v-avatar class="avatar avatar-1" size="30">
                        <v-img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"
                            alt="John"></v-img>
                    </v-avatar>
                    <v-avatar class="avatar avatar-2" size="30">
                        <v-img src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png" alt="sfasf"></v-img>

                    </v-avatar>
                    <v-avatar class="avatar avatar-3" size="30">
                        <v-img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"
                            alt="John"></v-img>
                    </v-avatar>
                </div>
            </div>
            <br>
            <div class="container">

                <p style="margin-top: -15%; "
                    class="text-caption
                                                                                                                                                                                                                    ">
                    about </p>

            </div>
            <div class="container">

                <p style="margin-top: -15%; "
                    class="text-caption
                                                                                                                                                                                                    ">
                    RicherMillly GODLY Seeing Things At Different Angles. @charg1ng @efuseofficial @pacprotocol
                    @deltabeverages #PAC

                </p>

            </div>





            <v-divider height="1" />
        </div>
    </div>
</template>

<style lang="scss">
.container {
    justify-content: center;
    height: 7vh;

}




.avatar-image {
    width: 100%;
    height: auto;
    justify-content: center;

}

.avatar-group {
    position: relative;
    margin-top: -10%;
    margin-left: 35%;
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
