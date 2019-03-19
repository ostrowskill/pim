<template>
  <nav class="product-details-nav">
    <ul>
      <li>
        <a href="#breadcrumb">breadcrumb</a>
      </li>
      <li>
        <a href="#images">images</a>
      </li>
      <li>
        <a href="#description">description</a>
      </li>
      <li>
        <a href="#status">status</a>
      </li>
      <li>
        <a href="#lorem">lorem</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    //smooth scrool
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView(
            {behavior: "smooth", block: "start"}
        );
      });
    });
  }
};
</script>

