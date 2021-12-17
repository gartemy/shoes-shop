<template>
  <div class="basket">
    <div class="basket__info">
      <div class="basket-wrapper">
        <h2>Total</h2>
        <div class="basket__info-item">
          <p>Subtotal:</p>
          <span>${{ getTotal }}</span>
        </div>
        <div class="basket__info-item">
          <p>Sale:</p>
          <span>${{ getSale }}</span>
        </div>
        <div class="basket__info-item">
          <p>Content:</p>
          <span class="remove-btn" @click="$store.commit('CLEAR_CART')">Remove all</span>
        </div>
      </div>
    </div>

    <div class="basket__total">
      <div class="basket-wrapper">
        <div class="basket__total-info">
          <p>Order Total:</p>
          <span>${{ (getTotal - getSale).toFixed(2) }}</span>
        </div>
      </div>
    </div>

    <div class="basket__products">
      <div class="basket-wrapper">
        <div class="basket__product" v-for="item in $store.state.cartItems" :key="item.id">
          <div class="basket__product-icon">
            <img :src="require(`../static/bestsellers/${item.icon}`)" alt="">
          </div>
          <div class="basket__product-info">
            <div class="basket__product-details">
              <p>{{ item.title }}</p>
              <p>${{ item.price }}</p>
            </div>
            <span class="remove-btn" @click="removeProduct(item)">Remove</span>
          </div>
        </div>
      </div>
    </div>

    <div class="basket__checkout">
      <div class="basket-wrapper">
        <div class="basket__checkout-items">
          <p>Checkout</p>
          <img src="../static/checkout.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Basket",
  computed: {
    getTotal() {
      return this.$store.state.cartItems.reduce((res, product) => res + (product.oldPrice || product.price), 0).toFixed(2)
    },
    getSale() {
      return this.$store.state.cartItems.filter(item => item.sale).reduce((res, product) => res + product.oldPrice - product.price, 0).toFixed(2)
    }
  },
  methods: {
    removeProduct(product) {
      this.$store.commit('REMOVE_FROM_CART', product)
      product.selected = false
    }
  }
}
</script>

<style lang="scss" scoped>

.remove-btn {
  cursor: pointer;
  text-decoration: underline;
}

.basket {
  background-color: #ffffff;
  max-width: 455px;
  padding-top: 99px;

  &-wrapper {
    max-width: 314px;
    margin: 0 auto;
  }

  h2 {
    text-transform: uppercase;
    padding-top: 20px;
    margin-bottom: 30px;
  }

  &__info {
    border-top: 1px solid #BDBDBD;
    border-bottom: 1px solid #BDBDBD;

    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 40px;
      }

      span {
        font-weight: 500;
      }
    }
  }

  &__total {
    font-size: 1.25rem;
    font-weight: 500;
    border-bottom: 1px solid #BDBDBD;

    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
    }
  }

  &__products {
    padding-top: 40px;
  }

  &__product {
    display: flex;
    gap: 10px;
    padding-bottom: 40px;

    &-icon {
      width: 100px;
      height: 100px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100px;
    }

    &-details {

      p {
        color: #818181;
        max-width: 151px;
        margin-bottom: 5px;
      }

      p:last-child {
        color: #000000;
        font-weight: 500;
        margin-bottom: 0;
      }
    }
  }

  &__checkout {
    background: #000000;
    color: #ffffff;
    cursor: pointer;

    &-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.25rem;
      font-weight: 500;
      height: 84px;
    }
  }
}
</style>
