<template>
    <footer class="footer">
        <!-- Toutes les icônes -->
        <div class="icons">
            <!-- Icônes des réseaux sociaux -->
            <div class="icon"><a href="https://www.instagram.com/"><img src="@/assets/instagram.gif" alt="Instagram"></a>
            </div>
            <div class="icon"><a href="https://twitter.com/"><img src="@/assets/twitter.gif" alt="Twitter"></a></div>
            <div class="icon"><a href="https://www.youtube.com/"><img src="@/assets/youtub.gif" alt="YouTube"></a></div>

            <!-- Icônes de contact -->
            <div class="contact-info">
                <div class="icon"><img src="@/assets/appel.png" alt="Téléphone"></div>
                <div class="text">+1234567890</div>
            </div>
            <div class="contact-info">
                <div class="icon"><a href="mailto:info@example.com"><img src="@/assets/mail.gif" alt="E-mail"></a></div>
                <div class="text">info@example.com</div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
/* Votre style pour le footer */
.footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
}

.icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.icon {
    margin-right: 10px;
}

.icon img {
    max-width: 30px;
    height: auto;
}

.contact-info {
    display: flex;
    align-items: center;
}

.contact-info .icon img {
    max-width: 20px;
    height: auto;
    margin-right: 5px;
}

.contact-info .text {
    font-size: 14px;
    margin-left: 5px;
}
</style>
