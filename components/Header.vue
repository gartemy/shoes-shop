<template>
  <header class="header">
    <div v-if="isOpen" class="background" @click="openBasket()"></div>
    <div class="container">
      <nav class="navbar" :class="{border: isOpen}">
        <nuxt-link :to="'/'" class="navbar-brand">
          <img src="../static/logo.png" alt="" @click="reloadPage()">
        </nuxt-link>

        <ul class="navbar-nav flex-row justify-content-end">
          <li class="nav-item" v-for="item in items" :key="item.id" :class="{active: item.isActive}">
            <nuxt-link class="nav-link" :to="item.link">{{ item.title }}</nuxt-link>
          </li>
          <li class="nav-item" @click="openBasket()" :class="{active: isOpen}">
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
  },
  methods: {
    openBasket() {
      this.isOpen = !this.isOpen
      if (this.isOpen && window.innerHeight > 782) {
        document.querySelector('html').style.overflow = 'hidden'
      } else {
        document.querySelector('html').style.overflow = 'auto'
      }
    },
    reloadPage() {
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>

.border {
  border: none!important;
}

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

@media (max-width: 1690px) {
  .basket {
    right: 0;
  }
}

@media (max-width: 769px) {
  .nav-item:first-child {
    width: auto !important;
  }
}

@media (max-width: 456px) {
  .basket {
    width: 100vw;
  }
}

@media (max-width: 453px) {
  .navbar {
    justify-content: center;
    position: relative;
    z-index: 30;

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
