<template>
  <header class="header">
    <div v-if="isOpen" class="background" @click="isOpen = false"></div>
    <div class="container">
      <nav class="navbar">
        <nuxt-link :to="'/'" class="navbar-brand">
          <img src="../static/logo.png" alt="">
        </nuxt-link>

        <ul class="navbar-nav flex-row justify-content-end">
          <li class="nav-item" v-for="item in items" :key="item.id" :class="{active: item.isActive}">
            <nuxt-link class="nav-link" :to="item.link">{{ item.title }}</nuxt-link>
          </li>
          <li class="nav-item" @click="isOpen = !isOpen" :class="{active: isOpen}">
            <nuxt-link class="nav-link" :to="'/'" v-if="basketCount !== 0">Basket({{basketCount}})</nuxt-link>
            <nuxt-link class="nav-link" :to="'/'" v-else>Basket</nuxt-link>
          </li>
        </ul>
      </nav>

      <div v-if="isOpen" class="basket">
        <basket></basket>
      </div>
    </div>
  </header>
</template>

<script>
import Basket from "./Basket";

export default {
  name: "TheHeader",
  components: {Basket},
  data() {
    return {
      isOpen: false,
      items: [
        {id: 1, title: 'Catalog', link: '/', isActive: true},
        {id: 2, title: 'Profile', link: '/', isActive: false},
      ],
    }
  },
  computed: {
    basketCount() {
      return this.$store.state.cartItems.length
    }
  }
}
</script>

<style lang="scss" scoped>

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
}

.navbar {
  border-bottom: 1px solid #BDBDBD;
  z-index: 100;
  padding: 38px 0;

  &-nav {
    width: 75%;
    gap: 43px;

    .nav-item {

      &:first-child {
        width: 100%;
        margin-left: 0;
      }

      &:not(:first-child) {
        z-index: 20;
      }

      &.active a {
        color: #FF6B00;
      }
    }
  }
}

.basket {
  width: 455px;
  position: absolute;
  top: 0;
  right: 6.4%;
  z-index: 2;
}

@media (max-width: 769px) {
  .nav-item:first-child {
    width: auto !important;
  }
}

@media (max-width: 453px) {
  .navbar {
    justify-content: center;

    &-nav {
      width: 100%;
      justify-content: center;
      padding-top: 15px;
    }
  }
}

@media (max-width: 320px) {
  .navbar-nav {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}
</style>
