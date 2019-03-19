<template>
    <div>
        <h1>products</h1>
        <!-- tabs with products // perhaps some component-->
        <ul v-for="product in products" :key="product.id">
            <li> {{ product.title }} </li>
            <router-link :to="'/product/' + product.id" class="btn btn-primary">show more</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: []
        }
    },
    created() {
        this.axios.get('http://jsonplaceholder.typicode.com/posts')
                  .then( response => {
                      console.log(response.data)
                      this.products = response.data
                  })
    }
}
</script>
