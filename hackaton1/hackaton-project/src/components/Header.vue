<template>
    <div class="header">
        <!-- Utilisation de router-link pour lier le logo à la page d'accueil -->
        <router-link to="/">
            <img src="@/assets/logo.png" alt="Logo" class="logo" />
        </router-link>
        <h1>BDE Estiam</h1>
        <div class="links">
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/pub">Publications</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped>
/* Votre style pour le header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
}

h1 {
    text-transform: uppercase;
}

.header img {
    margin-right: 10px;
    max-width: 300px;
    margin-right: 10px;
}

.links {
    display: flex;
    gap: 30px;
}

.links a {
    text-decoration: none;
    color: #0f1012;
    font-size: 18px;
}

.links a:hover {
    color: #2980b9;
}
</style>
