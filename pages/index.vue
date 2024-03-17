<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid tm-container-content tm-mt-60">
        <div class="row mb-4">
            <h2 class="col-6 tm-text-primary">
                Product List
            </h2>
        </div>
        <div class="row tm-mb-90 tm-gallery">
        	<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5" v-for="(product, index) in products" :key="index">
                <figure class="effect-ming tm-video-item">
                    <img :src="product.images[0]" alt="Image" class="img-fluid">
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h2>{{ product.title }}</h2>
                        <a :href="'/' + product.id">View more</a>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light">{{ $dayjs(product.creationAt) }}</span>
                    <span>{{ product.category.name }}</span>
                </div>
            </div>
        </div>
        <div class="row tm-mb-90">
            <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                <a class="btn btn-primary tm-btn-prev mb-2" :class="{ disabled: offset === 0}" @click="changeOffset('prev')">Previous</a>
                <a class="btn btn-primary tm-btn-next" @click="changeOffset('next')">Next Page</a>
            </div>            
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  let offset: number = 0;
  function changeOffset(type: string) {
    switch (type) {
      case 'prev':
        offset -= 0
        break
      case 'next':
        offset += 12
        break
      default:
        offset = 0
        break
    }
    refresh
  }
  const { data: products, refresh } = await useFetch('https://api.escuelajs.co/api/v1/products?offset=' + offset + '&limit=12')
</script>