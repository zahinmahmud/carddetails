<script setup >

</script>

<template>
  <div>
    <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/questions">Questions</router-link>
  </nav>

  </div>
</template>

<style scoped>
nav{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
nav a{
    text-decoration: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
}
</style>

