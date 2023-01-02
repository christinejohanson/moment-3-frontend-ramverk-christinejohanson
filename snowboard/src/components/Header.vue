<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
         <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src="../assets/5050.jpg" alt="smallogo" width="30" height="30">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item"><RouterLink to="/" a class="nav-link">HEM</RouterLink></li>
                <li class="nav-item"><RouterLink to="/snowboardlista" a class="nav-link">SNOWBOARDLISTA</RouterLink></li>
                <li class="nav-item"><RouterLink to="/info" a class="nav-link">INFO OM VUE</RouterLink></li>
                </ul>

            </div>
         </div>
        </nav>
    </header>
</template>

<script>
    //importerar routerlink
    import { RouterLink } from 'vue-router'
    //ange komponenter att använda
    export default {
        components: {
            RouterLink
        }
    }
</script>

<style scoped>
    .container-fluid {
  background-color: #b8e0e3;
}
</style>