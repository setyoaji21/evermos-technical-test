<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid tm-container-content tm-mt-60">
        <div class="row mb-4">
            <h2 class="col-12 tm-text-primary">{{ product.title }}</h2>
        </div>
        <div class="row tm-mb-90">            
            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                <img :src="product.images[0]" :alt="product.title" class="img-fluid">
            </div>
            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                <div class="tm-bg-gray tm-video-details">                 
                    <div class="mb-4">
                        <h3 class="tm-text-gray-dark mb-3">Category</h3>
                        <p>{{ product.category.name }}</p>
                    </div>
                    <div class="mb-4">
                        <h3 class="tm-text-gray-dark mb-3">Description</h3>
                        <p>{{ product.description }}</p>
                    </div>
                    <div class="mb-4">
                        <h3 class="tm-text-gray-dark mb-3">Price</h3>
                        <p>$ {{ product.price }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <h2 class="col-12 tm-text-primary">
                Related Photos
            </h2>
        </div>
        <div class="row mb-3 tm-gallery">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5" v-for="(relatedProduct, index) in relatedProducts" :key="index">
                <figure class="effect-ming tm-video-item">
                    <img :src="relatedProduct.images[0]" :alt="relatedProduct.title" class="img-fluid">
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h2>{{ relatedProduct.title }}</h2>
                        <a :href="'/' + relatedProduct.id">View more</a>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">{{ $dayjs(relatedProduct.creationAt) }}</span>
                    <span>{{ relatedProduct.category.name }}</span>
                </div>
            </div>     
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: product } = await useFetch('https://api.escuelajs.co/api/v1/products/' + route.params.id)
const { data: relatedProducts } = await useFetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=8')
</script>