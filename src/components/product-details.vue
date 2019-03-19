<template>
      <div class="product-detail-wrapper">
      <h2>detailsvd</h2>
      <section class="product-detail" id="breadcrumb"></section>
      <ul class="breadcrumb f-wrap">
        <li class="breadcrumb-item">
          <router-link :to="'/'">Products</router-link>
        </li>
        <li class="breadcrumb-item">/</li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.id }}</li>
      </ul>
      <section class="product-detail" id="images">
      <!-- <product-slider :images="images"/> -->
      <!-- //<h2>product attr</h2> -->
      </section>
      <section class="product-detail" id="description">

      </section>
      <section class="product-detail" id="status">

      </section>
      <section class="product-detail" id="lorem" ref="lorem">

      </section>
      <!-- details -->
      </div>
</template>

<script>
export default {

};
</script>