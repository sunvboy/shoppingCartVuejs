<template>
  <tr>
    <th scope="row">1</th>
    <td>{{ product.name }}</td>
    <td>{{ formatPrice }}</td>
    <td>
      <input
        type="number"
        :value="cart.quantity"
        min="1"
        @blur="handleChangeQuantity"
      />
    </td>
    <td>
      <strong>{{ formatTotalPrice }}</strong>
    </td>
    <td>
      <a class="label label-info update-cart-item" href="#">Update</a>
      <a
        class="label label-danger delete-cart-item"
        href="#"
        @click.prevent="handleDelete"
        >Delete</a
      >
    </td>
  </tr>
</template>

<script>
import { toCurrency, validateQuantity } from "../../helper";
import { mapActions } from "vuex";
import { NOTI_ACT_DELETE } from "../../constans/config";
import { NOTI_GREATER_THAN_ONE, NOTI_ACT_UPDATE } from "../../constans/config";

export default {
  name: "c-body",
  props: {
    cart: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
  computed: {
    product() {
      return this.cart.product;
    },
    formatPrice() {
      return toCurrency(this.cart.product.price, "USD", "right");
    },
    formatTotalPrice() {
      return toCurrency(
        this.cart.product.price * this.cart.quantity,
        "USD",
        "right"
      );
    },
  },
  methods: {
    ...mapActions({
      handleDeleteA: "cart/A_deletetocart",
      showLoading: "showLoading",
      updateQuantity: "cart/A_updateQuantity",
    }),
    handleDelete() {
      if (confirm("Bạn có muốn xóa sản phẩm này không?")) {
        this.handleDeleteA(this.cart.product);
        this.$notify({
          group: "foo",
          type: "success",
          title: "Notification message",
          text: NOTI_ACT_DELETE,
        });
      }
    },
    handleChangeQuantity(e) {
      this.showLoading(true);
      setTimeout(() => {
        let quantity = parseInt(e.target.value);
        const check = validateQuantity(quantity);
        if (check) {
          let data = {
            objProduct: this.cart,
            quantity: quantity,
          };
          this.updateQuantity(data);
          this.$notify({
            group: "foo",
            type: "success",
            title: "Notification message",
            text: NOTI_ACT_UPDATE,
          });
        } else {
          e.target.value = this.cart.quantity;
          this.$notify({
            group: "foo",
            type: "error",
            title: "Notification message",
            text: NOTI_GREATER_THAN_ONE,
          });
        }
        this.showLoading(false);
      }, 1000);
    },
  },
};
</script>

<style>
</style>
