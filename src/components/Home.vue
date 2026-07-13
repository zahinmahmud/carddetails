<template>
    <h2 class="text">Car gallery</h2>
    <div class="container">
        <div class="card" v-for="data in productDetails" :key="data.id">
            <img :src="data.CarImage" alt="car_image" :style="{width:data.ImageWidth}">
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

    router.push(`./ProductDetails/${id}`)
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
}

.container {
    width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.card {
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