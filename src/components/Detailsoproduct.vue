<template>
  <div>
    <div v-if="product">
        <div>
                <h2>Product Details {{ product.id }}</h2>
      <h2>Brand Name: {{ product.BrandName }}</h2>
      <p>Description: {{ product.ModelName }}</p> 
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