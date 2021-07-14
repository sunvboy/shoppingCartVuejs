<template>
  <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h1 class="panel-title">List Products</h1>
      </div>
      <div class="panel-body" id="list-product" >
        
        <!-- PRODUCT : START -->
        <p_item v-for="v in products" v-bind:key="v.id" v-bind:product="v"></p_item>
        <!-- PRODUCT : END -->

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import p_item from "./product/p-item.vue";
export default {
  name: "c-product",
  components: {
    p_item,
  },
  computed:{
    ...mapState({
      products : state => state.product.productList
    })
  },
  data() {
    return {
      
    }
  }
};
</script>

<style>
</style>
