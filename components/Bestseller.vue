<template>
  <div class="bestsellers__item">
    <div class="bestsellers__item-icon">
      <img :src="require(`../static/bestsellers/${bestseller.icon}`)" :class="{found: found}" alt="">
      <span v-if="bestseller.sale">Sale -{{ bestseller.sale }}%</span>
    </div>
    <div class="bestsellers__item-title">
      <p>{{ bestseller.title }}</p>
    </div>
    <div class="bestsellers__item-price">
      <p>${{ bestseller.price }}</p>
      <strike><p v-if="bestseller.sale">${{ bestseller.oldPrice }}</p></strike>
    </div>
    <div class="bestsellers__item-btn">
      <button v-if="!bestseller.selected" @click="addToCart(bestseller)">
        Add to basket
        <img src="../static/add.svg" alt="">
      </button>
      <button class="added" v-else @click="addToCart(bestseller)">
        Added
        <img src="../static/added.svg" alt="">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bestseller",
  props: {
    bestseller: {
      type: Object,
      required: true
    },
    found: {
      type: Number,
      required: true
    }
  },
  methods: {
    addToCart(product) {
      if (!product.selected) {
        this.$store.commit('ADD_TO_CART', product)
        product.selected = true
      } else {
        this.$store.commit('REMOVE_FROM_CART', product)
        product.selected = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.found {
  height: 400px;
}

.bestsellers__item {
  max-width: 335px;
  margin-bottom: 60px;

  &:nth-child(3) {
    max-width: 690px;
  }

  &-icon {
    position: relative;
    margin-bottom: 15px;

    span {
      color: #ffffff;
      background: #FF6B00;
      position: absolute;
      top: 25px;
      right: 25px;
      padding: 12px 20px;
      background: #FF6B00;
    }
  }

  &-title {
    margin-bottom: 5px;
  }

  &-price {
    display: flex;
    gap: 10px;
    font-weight: 600;
    margin-bottom: 15px;

    strike {
      color: #B7B7B7;
      font-weight: 500;
    }
  }

  &-btn {
    max-width: 335px;

    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      background: #2E2E2E;
      padding: 0 22px 0 20px;
    }

    .added {
      background: #FFFFFF;
      border: 1px solid #000000;
      color: #000000;
    }
  }
}

@media (min-width: 1074px) and (max-width: 1429px) {
  .bestsellers__item:nth-child(3) {
    max-width: 335px;
  }

  .bestsellers__item-icon img {
    height: 400px;
  }
}

@media (max-width: 719px) {
  .bestsellers__item:nth-child(3) {
    max-width: 335px;
  }
}

@media (max-width: 400px) {
  .found {
    height: auto;
  }
}
</style>
