<template>
    <router-link to="/">Back</router-link>
    <div class="container">
        <div v-if="product">
            <div>
                <img :src="product.CarImage[0]" alt="" style="width: 300px; height: 300px;">
                <img :src="product.CarImage[1]" alt="" style="width: 300px; height: 300px;">
                <h2>Product Details {{ product.id }}</h2>
                <h2>Brand Name: {{ product.BrandName }}</h2>
                <li>Description: {{ product.ModelName }}</li>
                <li>Year of manufactute : {{ product.Manufacture }}</li>
                <li>FuelType {{ product.FuelType }}</li>
                <li>Car Running : {{ product.CarRunning }}</li>
                <li>Car Package : {{ product.Package }}</li>
                <li>Seats of Car : {{ product.seat }}</li>
                <li>Shape of Cars : {{ product.ShapeType }}</li>
                <ul>
                  <span style="font-weight: bolder;">Approximate Mileage by Engine Modelt</span>
                    <li v-for="(engine, index) in product.EngineModel" :key="index">
                        Model of Engine
                        {{ engine.engine }} -
                        Highway: {{ engine.mileage.highway }},
                        City: {{ engine.mileage.city }}
                    </li>
                </ul>
            </div>
        </div>

        <div v-else>
            <p>Product loading or not found...</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import productDetails from '../productDetails'

const route = useRoute()
const id = computed(() => route.params.id)

// Find the ONE matching product out of your productDetails array
const product = computed(() => {
    // Search the imported productDetails array, matching the ID string
    return productDetails.find(p => String(p.id) === String(id.value))
})
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
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: center;
}

.container > div {
    width: 100%;
    text-align: center;
}

.container li{

    list-style: none;
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
}

/* Card */
.card {
    width: 100%;
    aspect-ratio: 1 / 1;
    /* Keeps cards square */
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