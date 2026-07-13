<template>
    <h2 class="text">Car gallery</h2>
    <div class="container">
        <div class="card">
            <img src="#" alt="car_image">
            <h2>Brand:Hello</h2>
            <h3>Model:</h3>
            <p> Car description</p>
            <p>Question Answer</p>
        </div>
                <div class="card">
            <img src="#" alt="car_image">
            <h2>Brand:Hello</h2>
            <h3>Model:</h3>
            <p> Car description</p>
            <p>Question Answer</p>
        </div>
                <div class="card">
            <img src="#" alt="car_image">
            <h2>Brand:Hello</h2>
            <h3>Model:</h3>
            <p> Car description</p>
            <p>Question Answer</p>
        </div>

        <div class="card">
            <img src="#" alt="car_image">
            <h2>Brand:Hello</h2>
            <h3>Model:</h3>
            <p> Car description</p>
            <p>Question Answer</p>
        </div>
             <div class="card">
            <img src="#" alt="car_image">
            <h2>Brand:Hello</h2>
            <h3>Model:</h3>
            <p> Car description</p>
            <p>Question Answer</p>
        </div>
                <div class="card">
            <img src="#" alt="car_image">
            <h2>Brand:Hello</h2>
            <h3>Model:</h3>
            <p> Car description</p>
            <p>Question Answer</p>
        </div>
                <div class="card">
            <img src="#" alt="car_image">
            <h2>Brand:Hello</h2>
            <h3>Model:</h3>
            <p> Car description</p>
            <p>Question Answer</p>
        </div>

        <div class="card">
            <img src="#" alt="car_image">
            <h2>Brand:Hello</h2>
            <h3>Model:</h3>
            <p> Car description</p>
            <p>Question Answer</p>
        </div>
             <div class="card">
            <img src="#" alt="car_image">
            <h2>Brand:Hello</h2>
            <h3>Model:</h3>
            <p> Car description</p>
            <p>Question Answer</p>
        </div>
                <div class="card">
            <img src="" alt="car_image">
            <h2>Brand:Hello</h2>
            <h3>Model:</h3>
            <p> Car description</p>
            <p>Question Answer</p>
        </div>
                <div class="card">
            <img src="#" alt="car_image">
            <h2>Brand:Hello</h2>
            <h3>Model:</h3>
            <p> Car description</p>
            <p>Question Answer</p>
        </div>

        <div class="card">
            <img src="#" alt="car_image">
            <h2>Brand:Hello</h2>
            <h3>Model:</h3>
            <p> Car description</p>
            <p>Question Answer</p>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.text {
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 2rem;
    letter-spacing: 12px;
}

.container {
    width:1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
}
.card{
    width: 400px;
    height: 400px;
    align-items: center;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
</style>