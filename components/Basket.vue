<template>
  <div class="basket">
    <div id="basket__info" :class="{scroll: height === 600}">
      <div class="order__info">
        <div class="basket-wrapper">
          <h2>Total</h2>
          <div class="order__info-item">
            <p>Subtotal:</p>
            <span>${{ getTotal }}</span>
          </div>
          <div class="order__info-item">
            <p>Sale:</p>
            <span>${{ getSale }}</span>
          </div>
          <div class="order__info-item">
            <p>Content:</p>
            <span class="remove-btn" @click="$store.commit('CLEAR_CART')">Remove all</span>
          </div>
        </div>
      </div>

      <div class="order__total">
        <div class="basket-wrapper">
          <div class="order__total-info">
            <p>Order Total:</p>
            <span>${{ (getTotal - getSale).toFixed(2) }}</span>
          </div>
        </div>
      </div>

      <div class="order__products">
        <div class="basket-wrapper">
          <div class="order__product" v-for="item in $store.state.cartItems" :key="item.id">
            <div class="order__product-icon">
              <img :src="require(`../static/bestsellers/${item.icon}`)" alt="">
            </div>
            <div class="order__product-info">
              <div class="order__product-details">
                <p>{{ item.title }}</p>
                <p>${{ item.price }}</p>
              </div>
              <span class="remove-btn" @click="removeProduct(item)">Remove</span>
            </div>
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
  data() {
    return {
      height: null
    }
  },
  computed: {
    getTotal() {
      return this.$store.state.cartItems.reduce((res, product) => res + (product.oldPrice || product.price), 0).toFixed(2)
    },
    getSale() {
      return this.$store.state.cartItems.filter(item => item.sale).reduce((res, product) => res + product.oldPrice - product.price, 0).toFixed(2)
    }
  },
  methods: {
    updatedHeight() {
      this.height = document.querySelector('#basket__info').offsetHeight
    },
    removeProduct(product) {
      this.$store.commit('REMOVE_FROM_CART', product)
      product.selected = false
    }
  },
  mounted() {
    this.updatedHeight()
  }
}
</script>

<style lang="scss" scoped>

.remove-btn {
  cursor: pointer;
  text-decoration: underline;
}

.scroll {
  overflow-y: scroll;
}

#basket__info {
  max-height: 600px;
}

.basket {
  background-color: #ffffff;
  max-width: 455px;
  max-height: 784px;
  padding-top: 99px;

  &-wrapper {
    max-width: 314px;
    margin: 0 auto;
    padding: 0 5px;
  }

  h2 {
    text-transform: uppercase;
    padding-top: 20px;
    margin-bottom: 30px;
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

.order {

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
}

@media (max-width: 450px) {
  .basket {
    padding-top: 120px;
  }
}

@media (max-width: 320px) {
  .basket {
    padding-top: 180px;
  }
}
</style>
