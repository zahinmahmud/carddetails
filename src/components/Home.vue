<template>
        <h2 class="text">Car gallery</h2>
    <div class="container">
    
        <div class="card" v-for="data in productDetails" :key="data.id">
            <img :src="data.CarImage[0]" alt="car_image" style="width: 200px; ">
            <h2>Brand:{{ data.BrandName }}</h2>
            <h3>Model:{{ data.ModelName }}</h3>
            <p> Car CC : {{ data.CarCC }}</p>
            <p>Manufacture:{{ data.Manufacture }}</p>
            <button @click="nextPage(data.id)">View Details</button>
        </div>
    
        <div>

        </div>
           <div>
        <div>
            <!-- Access the first item in the array using [0] -->
        
        </div>
    </div>
    </div>

 
</template>

<script setup>
import productDetails from '../productDetails';
import imageGallery from '../image';

import {useRouter} from 'vue-router'
const router = useRouter()


const nextPage =(id)=>{
    console.log("nex page")

    router.push(`/details/${id}`)
}
</script>

<style scoped>
.text {
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 2rem;
    letter-spacing: 12px;
    padding: 0 15px;
}

/* Container */
.container {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    box-sizing: border-box;
}

/* Card */
.card {
    width: 100%;
    aspect-ratio: 1 / 1; /* Keeps cards square */
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
}

/* Tablet */
@media (max-width: 992px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }

    .text {
        font-size: 18px;
        letter-spacing: 8px;
    }
}

/* Mobile */
@media (max-width: 576px) {
    .container {
        grid-template-columns: 1fr;
        gap: 15px;
        padding: 15px;
    }

    .text {
        font-size: 16px;
        letter-spacing: 4px;
        line-height: 1.6;
    }
}
</style>