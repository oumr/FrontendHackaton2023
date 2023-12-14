<template>
    <div>
      <h2>Connexion</h2>
      <form @submit.prevent="login">
        <label for="username">Nom d'utilisateur:</label>
        <input type="text" id="username" v-model="username" required>
  
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="password" required>
  
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
          // Fetch user data from the server based on the provided username
          console.log(this.username)
          const response = await fetch(`http://127.0.0.1:5001/user/username/${this.username}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            // Handle non-successful response
            const data = await response.json();
            alert(data.message || 'Erreur de connexion.');
            return;
          }
  
          // If user exists, fetch their data
          const userData = await response.json();
          
          console.log(userData);
          
          const StrData = userData.stringify();

          console.log(StrData.password);

          // Check if the password matches
          if (StrData.password=== this.password) {
            // If the password is correct, set the user as logged in
            this.isLoggedIn = true;
          } else {
            alert('Mot de passe incorrect.');
          }
        } catch (error) {
          console.error('Erreur de connexion:', error);
        }
      },
      logout() {
        // Reset login status and user data
        this.isLoggedIn = false;
        this.username = '';
        this.password = '';
      },
    },
  };
  </script>
  