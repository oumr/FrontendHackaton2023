<template>
    <div>
      <h2>Données JSON récupérées :</h2>
      <div v-if="jsonData">
        <p>{{ jsonData }}</p>
      </div>
      <div v-else>
        <p>Chargement des données...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        jsonData: null,
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        fetch('http://127.0.0.1:5001/user/user/1')
          .then(res => res.json())
          .then(data => {
            this.jsonData = JSON.stringify(data, null, 2);
          })
          .catch(error => console.error('Erreur de récupération des données :', error));
      },
    },
  };
  </script>

