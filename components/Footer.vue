<template>
  <footer class="footer">
    <div class="container">
      <nav class="navbar">
        <nuxt-link :to="'/'" class="navbar-brand">
          <img src="../static/logo-footer.png" alt="">
        </nuxt-link>

        <ul class="navbar-nav">
          <li class="nav-item" v-for="item in items" :key="item.id">
            <nuxt-link class="nav-link" :to="item.link">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      items: [
        {id: 1, title: 'Copyright', link: '/'},
        {id: 2, title: 'Contacts', link: '/'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.footer {
  background-color: #1B1B1B;

  .navbar {
    color: #fff;
    padding: 40px 0;

    &-nav {
      gap: 40px;

      .nav-item {

        .nav-link {
          color: #ffffff;

          &:hover {
            color: #FF6B00;
          }
        }
      }
    }
  }
}

@media (max-width: 377px) {
  .navbar {
    justify-content: center !important;

    &-nav {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      gap: 15px!important;
      padding-top: 20px;
    }
  }
}

</style>
