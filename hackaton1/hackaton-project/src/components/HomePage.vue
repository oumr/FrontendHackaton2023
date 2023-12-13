<template>
  <div class="home-page">
    <div class="image-section1">
      <div class="image-gallery">
        <div class="imageItem">
          <img src="@/assets/BDE.jpg" alt="Description de l'image 1" />
          <p>Description de l'image 1</p>
        </div>
      </div>
    </div>
    <div class="image-section2">
      <div class="image-item">
        <img src="@/assets/téléchargement.jpg" alt="Description de l'image 2" />
        <p>Description de l'image 2</p>
      </div>
      <!-- Ajoutez d'autres éléments d'image ici -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
/* Style pour la page d'accueil */
.home-page {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.image-section1,
.image-section2 {
  margin-top: 20px;
}

.imageItem {
  max-width: 100%;
  height: 20rem;
  overflow: hidden;
}

.image-item {
  text-align: center;
}

.image-item img {
  width: 50%;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
</style>
