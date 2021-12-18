<template>
  <div id="app">
    <Header/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "DefaultLayout",
  components: {Header, Footer}
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #000000;
  position: relative;
}

img {
  max-width: 100%;
}

a {
  color: #000000;
  text-decoration: none;
}

li {
  list-style-type: none;
}

button {
  width: 100%;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;

}

.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.125rem;

  &-nav {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
   }
}
</style>
