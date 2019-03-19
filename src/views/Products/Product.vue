<template>
  <div class="product-container">
    <ul class="breadcrumb f-wrap">
      <li class="breadcrumb-item">
        <router-link :to="'/'">Products</router-link>
      </li>
      <li class="breadcrumb-item">/</li>
      <li class="breadcrumb-item active" aria-current="page">{{ product.id }}</li>
    </ul>

    <div>{{ product.body }}</div>

    <h2>Discusssion</h2>
    <button @click="showComments" v-if="!showCommentBox">show comments</button>
    <ul class="list-group" v-if="showCommentBox">
      <li v-for="comment in comments" class="list-group-item" :key="comment.id">
        <strong>{{ comment.email }}</strong>
        <em>wrote:</em>
        {{ comment.body }}
      </li>
    </ul>

    <hr>
    <br>

    <div class="product-overview f-wrap">
      <product-slider :images="images"/>
      <product-desc :description="product.body"/>
    </div>

    <br>
    <hr>
    <br>

    <div class="product-details-container f-wrap">
      <!-- nav part-->
      <product-details-nav/>
      <!-- nav part-->
      <!-- details -->
      <div class="product-detail-wrapper">
        <section class="product-detail" id="breadcrumb">
          <h2>breadcrumb</h2>
          <ul class="breadcrumb f-wrap">
            <li class="breadcrumb-item">
              <router-link :to="'/'">Products</router-link>
            </li>
            <li class="breadcrumb-item">/</li>
            <li class="breadcrumb-item active" aria-current="page">{{ product.id }}</li>
          </ul>
        </section>

        <section class="product-detail" id="images">
          <h2>img</h2>
          <product-slider :images="images"/>
          <!-- //<h2>product attr</h2> -->
        </section>
        <section class="product-detail" id="description">
          <h2>desc</h2>
          <p>desc loader from API</p>
          <p>{{ product.body }}</p>
          <br>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam minima voluptatem fugit odit! Exercitationem laborum ex reprehenderit amet earum voluptate dolorum odit, quasi, blanditiis nam aliquid excepturi in fugiat cupiditate repellendus illo ad soluta a dignissimos, recusandae distinctio temporibus voluptatum repellat? Quaerat laborum dolor reprehenderit minus rerum similique molestias hic modi. Numquam veniam, amet illo corrupti deserunt libero omnis.</p>
        </section>
        <section class="product-detail" id="status">
          <h2>status</h2>
          <p>Last updated: 31 March 2017</p>
          <p>Created at: 01 Feb 2015</p>
        </section>
        <section class="product-detail" id="lorem" ref="lorem">
          <h2>lorem</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh. Ac turpis egestas sed tempus urna et pharetra. Tempus iaculis urna id volutpat lacus. Suscipit tellus mauris a diam. Magna ac placerat vestibulum lectus mauris ultrices eros in. Vitae suscipit tellus mauris a diam maecenas sed enim. Malesuada fames ac turpis egestas. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Enim praesent elementum…</p>
        </section>
        <!-- details -->
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import productSlider from "@/components/product-slider.vue";
import productDesc from "@/components/product-desc.vue";
import productDetailsNav from "@/components/product-details-nav.vue";
import productDetails from "@/components/product-details.vue";

export default {
  components: { productSlider, productDesc, productDetailsNav, productDetails },
  data() {
    return {
      product: {},
      comments: [],
      showCommentBox: false,

      //products img -just temporary, should be in product obj. from json
      images: [
        {
          id: 1,
          url:
            "https://cdn.lynda.com/course/713378/713378-636576595892468047-16x9.jpg"
        },
        {
          id: 2,
          url:
            "https://www.incimages.com/uploaded_files/image/970x450/products_364475.jpg"
        },
        {
          id: 3,
          url: "https://www.nsrcel.org/wp-content/uploads/2018/01/product.png"
        },
        {
          id: 4,
          url:
            "https://thumbs.mic.com/NGE1MGNjNWY0ZSMvaXk2UHBxOU44Q1RkRVRVemRfdExDdVRaUFpBPS8xNXgwOjEwMzB4NTcxLzgwMHg0NTAvZmlsdGVyczpmb3JtYXQoanBlZyk6cXVhbGl0eSg4MCkvaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3BvbGljeW1pYy1pbWFnZXMvaW4za2diOXZwdWtncXdudHlldWZwZDB3eTkyc290bjF1cXVrNG9nMm9ud3V2dTlpbGJkcTlnZXR1YXR5aXIwaC5qcGc.jpg"
        },
        {
          id: 5,
          url:
            "https://cdn.lynda.com/course/713378/713378-636576595892468047-16x9.jpg"
        }
      ]
    };
  },
  created() {
    this.axios
      .get("http://jsonplaceholder.typicode.com/posts/" + this.$route.params.id)
      .then(response => {
        this.product = response.data;
      });
  },
  methods: {
    showComments() {
      this.axios
        .get(
          "http://jsonplaceholder.typicode.com/comments?postId=" +
            this.$route.params.id
        )
        .then(response => {
          this.comments = response.data;
        })
        .then(() => (this.showCommentBox = true));
    },

    handleSCroll(e) {
      let mainNavLinks = document.querySelectorAll(".product-details-nav a");
      let mainSections = document.querySelectorAll(".product-details-container section");

      let fromTop = document.querySelector("#right-side").scrollTop;

      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
      });
    }
  },
  mounted() {
    document.querySelector("#right-side").addEventListener("scroll", this.handleSCroll);
  },
  destroyed() {
    document.querySelector("#right-side").removeEventListener('scroll', this.handleSCroll);
  }
};
</script>
