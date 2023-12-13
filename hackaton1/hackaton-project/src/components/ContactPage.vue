<template>
    <div class="template">
        <h1>Contact Page</h1>
        <div class="main-content">
            <div class="contact-form">
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="name">Nom :</label>
                        <input type="text" id="name" v-model="formData.name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail :</label>
                        <input type="email" id="email" v-model="formData.email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message :</label>
                        <textarea id="message" v-model="formData.message" rows="5" required></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
    components: {
        Header,
        Footer,
    },
    name: 'ContactPage',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Ajoutez ici la logique pour traiter les données du formulaire
            // Par exemple, vous pouvez envoyer les données à un serveur
            console.log('Formulaire soumis avec les données :', this.formData);
        }
    }
}
</script>

<style scoped>
.template {
    min-height: 100vh;
}

.main-content {
    text-align: center;
}

.contact-form {
    max-width: 400px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.form-group textarea {
    resize: vertical;
}

.form-group button {
    background-color: #4caf50;
    color: #fff;
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

h1 {
    text-align: center;
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
}
</style>


