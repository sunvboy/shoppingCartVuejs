<template>
  <div class="media product">
    <div class="media-left">
      <a href="#">
        <img class="media-object" :src="srcImage" alt="charmander" />
      </a>
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{ product.name }}</h4>
      <p>{{ product.summary }}</p>

      <div v-if="product.canBuy">
        <input v-model="quantity" type="number" value="1" min="1" />
        <a @click.prevent="handeBuyProduct" href="#" class="price">
          {{ formatPrice }}
        </a>
      </div>

      <span v-else class="price">
        {{ formatPrice }}
      </span>
    </div>
  </div>
</template>

<script>
import { toCurrency, validateQuantity } from "../../helper";
import { NOTI_GREATER_THAN_ONE,NOTI_ACT_ADD } from "../../constans/config";
import { mapActions } from 'vuex';

export default {
  name: "p-item",
  props: {
    product: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    srcImage() {
      return "/dist/images/" + this.product.image;
    },
    formatPrice() {
      return toCurrency(this.product.price, "USD", "right");
    },
  },
  methods: {
    ...mapActions({
      'addBuyProduct' : 'cart/A_addtocart'
    }),
    handeBuyProduct(e) {
      //e.preventDefault();
      const check = validateQuantity(this.quantity);
      if (check) {
        let numQty = parseInt(this.quantity);
        let data = {
          'product' : this.product,
          'quantity' : numQty
        }
        this.addBuyProduct(data);
        this.$notify({
          group: "foo",
          type: "success",
          title: "Notification message",
          text: NOTI_ACT_ADD,
        });
      } else {
        this.$notify({
          group: "foo",
          type: "error",
          title: "Notification message",
          text: NOTI_GREATER_THAN_ONE,
        });
      }
    },
  },
};
</script>

<style>
</style>
