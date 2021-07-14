<template>
  <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
    <div class="panel panel-info">
      <div class="panel-heading"><h1 class="panel-title">Your Cart</h1></div>
      <div class="panel-body">
        <table class="table">
          <thead>
            <tr>
              <th width="4%">#</th>
              <th>Pokemon</th>
              <th width="15%">Price</th>
              <th width="4%">Quantity</th>
              <th width="20%">Subtotal</th>
              <th width="25%">Action</th>
            </tr>
          </thead>
          <tbody id="my-cart-body">
            <!-- CART BODY -->
            <tr v-if="listCart.length === 0">
              <th colspan="6">{{ NOTI_ENTRY_PRODUCT }}</th>
            </tr>
            <template v-else>
              <CBODY v-for="(v, index) in listCart" :key="v.id" :cart="v" :index="index"/>
            </template>
          </tbody>
          <CFOOTER />
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { NOTI_ENTRY_PRODUCT } from "../constans/config";

import CBODY from "./cart/c-body.vue";
import CFOOTER from "./cart/c-footer.vue";

export default {
  name: "c-cart",
  components: {
    CBODY,
    CFOOTER,
  },
  computed: {
    ...mapState({
      listCart: (state) => state.cart.listCart,
    }),
  },
  data() {
    return {
      NOTI_ENTRY_PRODUCT: NOTI_ENTRY_PRODUCT,
    };
  },
};
</script>

<style>
</style>
