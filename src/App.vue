<template>
  <div  class="container">
    <h2>Common Question Asked for buying a car </h2>
    <div v-for="question in data" :key="question.id" class="card" >
      <li>{{ question.question }} </li>

    </div>
  </div>
  </template>
  <script setup>

  import data from "../question"
</script>
  <style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  width: 40%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-family: "Times New Roman", Times, serif;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid black;

}

.card li {
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
  list-style: none;
}
</style>