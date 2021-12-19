export const state = () => {
  cartItems: []
}

export const getters = {
  cartItems: cartItems => state.cartItems
}

export const mutations = {
  'ADD_TO_CART' (state, product) {
    product.selected = true
    state.cartItems.push(product)
  },
  'REMOVE_FROM_CART' (state, product) {
    product.selected = false
    state.cartItems = state.cartItems.filter(item => item.id != product.id)
  },
  'CLEAR_CART' (state) {
    state.cartItems.map(item => item.selected = false)
    state.cartItems = []
  }
}
