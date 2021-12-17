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
            <span v-if="search"><img src="../static/clear.svg" alt="" @click="search = ''"></span>
          </div>
        </div>

        <div class="search-form__item">
          <div class="search-form__item-title">
            <p>Product category</p>
          </div>
          <div class="search-form__item-option">
            <select class="select">
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
          <button>Apply</button>
        </div>
      </div>

      <div class="bestsellers">
        <h1>Bestsellers: 34</h1>
        <div class="bestsellers__items">
          <bestseller v-for="bestseller in bestsellers" :key="bestseller.id" :bestseller="bestseller"></bestseller>
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
      bestsellers: [
        {id: 1, icon: 'kids.png', title: 'Converse Kids 70', price: 49.99, selected: false},
        {id: 2, icon: 'chuck.png', title: 'Converse Chuck 70', price: 49.99, selected: false},
        {id: 3, icon: 'chuck-high.png', title: 'Converse Chuck 70 Renew High Top', price: 50.99, oldPrice: 84.99, sale: 40, selected: false},
        {id: 4, icon: 'pro-chuck.png', title: 'Converse Pro Chuck 80', price: 64.99, oldPrice: 99.99, sale: 35, selected: false},
        {id: 5, icon: 'winter.png', title: 'Converse Winter Chuck 70', price: 79.99, oldPrice: 99.99, sale: 20, selected: false},
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
  }
}
</script>

<style lang="scss" scoped>

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
  padding: 120px 0 60px 0;
  position: relative;

  h1 {
    max-width: 289px;
    position: absolute;
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  &__items {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: flex-end;
    flex-wrap: wrap;
  }
}

@media (max-width: 1024px) {
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
