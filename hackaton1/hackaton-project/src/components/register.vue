<template>
    <div>
      <h2>Connexion</h2>
      <form @submit.prevent="login">
        <label for="username">Nom d'utilisateur:</label>
        <input type="text" id="username" v-model="username" required>
  
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="password" required>

        <label for="email">email : </label>
        <input type="email" id="email" v-model="email" required>
  
        <button type="submit">Se connecter</button>
      </form>
  
      <div v-if="isLoggedIn">
        <p>Connecté en tant que {{ username }}</p>
        <button @click="logout">Se déconnecter</button>
      </div>
    </div>
  </template>
  
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isLoggedIn: false,
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://127.0.0.1:5001/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
            email: this.email,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          this.isLoggedIn = true;
        } else {
          alert(data.message || 'Erreur de connexion.');
        }
      } catch (error) {
        console.error('Erreur de connexion:', error);
      }
    },
    logout() {
      this.isLoggedIn = false;
      this.username = '';
      this.password = '';
    },
  },
};
</script>
