<template>
  <main class="catalog">
    <div class="container">
      <div class="search-form">
        <div class="search-form__item">
          <div class="search-form__item-title">
            <p>Search</p>
          </div>
          <div class="search-form__item-option">
            <input type="text" v-model="search">
            <span v-if="search"><img src="../static/clear.svg" alt="" @click="clearSearch()"></span>
          </div>
        </div>

        <div class="search-form__item">
          <div class="search-form__item-title">
            <p>Product category</p>
          </div>
          <div class="search-form__item-option">
            <select>
              <option v-for="category in categories" :key="category.id" :value="category.value">
                {{ category.value }}
              </option>
            </select>
            <span><img src="../static/arrow.svg" alt=""></span>
          </div>
        </div>

        <div class="search-form__item">
          <div class="search-form__item-title">
            <p>Sale</p>
          </div>
          <div class="search-form__item-option">
            <select>
              <option v-for="sale in sales" :key="sale.id" :value="sale.value">
                {{ sale.value }}
              </option>
            </select>
            <span><img src="../static/arrow.svg" alt=""></span>
          </div>
        </div>

        <div class="search-form__item">
          <button @click="searchProduct()">Apply</button>
        </div>
      </div>

      <div class="bestsellers" :class="{found: foundProducts.length }">
        <div v-if="found" class="bestsellers__content">
          <h1>Bestsellers: 34</h1>
          <div class="bestsellers__items">
            <bestseller v-for="bestseller in getBestsellers" :key="bestseller.id" :bestseller="bestseller" :found="foundProducts.length"></bestseller>
          </div>
        </div>
        <div class="not-found" v-else>
          <h1>НЕТ СООТВЕТСТВУЮЩИХ ТОВАРОВ</h1>
          <p>К сожалению, по Вашему запросу ничего не найдено</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Bestseller from "../components/Bestseller";

export default {
  name: 'IndexPage',
  components: {Bestseller},
  data() {
    return {
      search: '',
      found: true,
      foundProducts: [],
      bestsellers: [
        {id: 1, icon: 'kids.png', title: 'Converse Kids 70', price: 49.99, selected: false},
        {id: 2, icon: 'chuck.png', title: 'Converse Chuck 70', price: 49.99, selected: false},
        {
          id: 3,
          icon: 'chuck-high.png',
          title: 'Converse Chuck 70 Renew High Top',
          price: 50.99,
          oldPrice: 84.99,
          sale: 40,
          selected: false
        },
        {
          id: 4,
          icon: 'pro-chuck.png',
          title: 'Converse Pro Chuck 80',
          price: 64.99,
          oldPrice: 99.99,
          sale: 35,
          selected: false
        },
        {
          id: 5,
          icon: 'winter.png',
          title: 'Converse Winter Chuck 70',
          price: 79.99,
          oldPrice: 99.99,
          sale: 20,
          selected: false
        },
        {id: 6, icon: 'winter-black.png', title: 'Converse Winter Chuck 70 Full Black', price: 129.99, selected: false},
        {id: 7, icon: 'winter-white.png', title: 'Converse Winter Chuck 70 Black/White', price: 99.99, selected: false},
      ],
      categories: [
        {id: 1, value: 'Sneakers'},
        {id: 2, value: 'Sneakers'},
        {id: 3, value: 'Sneakers'},
      ],
      sales: [
        {id: 1, value: 'Bestsellers'},
        {id: 2, value: 'Bestsellers'},
        {id: 3, value: 'Bestsellers'},
      ],
    }
  },
  computed: {
    getBestsellers() {
      if (!this.foundProducts.length) {
        return this.bestsellers
      } else {
        return this.foundProducts
      }
    }
  },
  methods: {
    searchProduct() {
      this.foundProducts = this.bestsellers.filter(item => item.title.toLowerCase().includes(this.search.toLowerCase()))
      if (!this.foundProducts.length) {
        this.found = false
      }
      return this.foundProducts
    },
    clearSearch() {
      this.search = ''
      this.found = true
      this.foundProducts = []
    }
  }
}
</script>

<style lang="scss" scoped>

.not-found {
  text-align: center;

  h1 {
    font-size: 1.25rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 1.125rem;
  }
}

.found {

  h1 {
    position: relative !important;
    margin-bottom: 40px;
  }

  div {
    padding-top: 0!important;
  }

}

.search-form {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  font-size: 1.125rem;
  font-weight: 500;
  padding-top: 80px;
  gap: 20px;

  &__item {
    width: 335px;

    &-title {
      margin: 0 0 20px 0;
    }

    &-option {
      position: relative;

      input, select {
        font-size: 1.125rem;
        font-weight: 500;
        padding: 20px 0 20px 20px;
        background: #F5F5F5;
        border: none;
        outline: none;
      }

      input {
        width: 94%;
      }

      select {
        width: 100%;
        height: 61px;
        appearance: none;
        cursor: pointer;
      }

      span {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
      }
    }

    button {
      height: 61px;
      background: #1B1B1B;
    }
  }
}

.bestsellers {
  position: relative;
  padding: 120px 0 60px 0;

  &__content {

    h1 {
      max-width: 289px;
      position: absolute;
      font-size: 2.5rem;
      text-transform: uppercase;
    }
  }

  &__items {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: flex-end;
    flex-wrap: wrap;
  }
}

@media (max-width: 1429px) {
  .bestsellers__items {
    padding-top: 150px;
  }
}

@media (max-width: 320px) {
  .bestsellers h1 {
    font-size: 2rem;
  }
}
</style>
