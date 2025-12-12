<template>
  <div class="logo-container">
    <img src="@/assets/logo.png" alt="Brand Logo" class="logo" />
  </div>
</template>

<script>
export default {
  name: "BrandLogo"
};
</script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.logo {
  max-width: 50%;
  height: auto;
}
</style>
