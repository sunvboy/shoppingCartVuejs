<template>
  <div id="app">
    <div class="container">
      <!-- TITLE : START -->
      <CTITLE />

      <!-- TITLE : END -->

      <div class="row">
        <!-- LIST PRODUCT : START -->
        <CPRODUCT />
        <!-- LIST PRODUCT : END -->

        <!-- CART : START -->
        <CCART />
        <!-- CART : END -->
      </div>
    </div>
    <notifications group="foo" />
    <CLOADING :class="{ show: isLoading }"/>

  </div>
</template>

<script>
import CTITLE from "./components/c-title.vue";
import CPRODUCT from "./components/c-product.vue";
import CCART from "./components/c-cart.vue";
import CLOADING from "./components/c-loading.vue";
import {mapState} from "vuex";

export default {
  name: "app",
  components: {
    CTITLE,
    CPRODUCT,
    CCART,
    CLOADING,
  },
  data() {
    return {};
  },
  computed:{
    ...mapState(['isLoading'])
  }
};
</script>

<style>
</style>
