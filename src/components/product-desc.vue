<template>
        <ul class="product-list-desc">
            <li class="product-item title">Title</li>
            <li class="product-item sku">Sku</li>
            <li class="product-item">{{description}}</li>
            
        </ul>
</template>

<script>
export default {
    props: ['description']
}
</script>

