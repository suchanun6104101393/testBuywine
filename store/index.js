export const state = () => ({
  products: [
    {
      id: 1,
      title: 'Santa Helena',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 50,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      image: 'https://i.ytimg.com/vi/04bdcUjM-AU/maxresdefault.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 35,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 110,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
    },
    {
      id: 4,
      title: 'Product 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 50,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
    },
    {
      id: 5,
      title: 'Product 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 35,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
    },
    {
      id: 6,
      title: 'Product 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 110,
      ratings: 5,
      reviews: 1,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
    },
    {
      id: 7,
      title: 'Product 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 50,
      ratings: 5,
      reviews: 7,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
    },
    {
      id: 8,
      title: 'Product 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 35,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
    },
    {
      id: 9,
      title: 'Product 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 110,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
    },
  ],
  userInfo: {
    name: '',
    productTitleSearched: '',
  },
  systemInfo: {
    openCheckoutModal: false,
  },
})

export const getters = {
  productsAdded: (state) => {
    return state.products.filter((el) => {
      return el.isAddedToCart
    })
  },
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === id)
  },
  isCheckoutModalOpen: (state) => {
    return state.systemInfo.openCheckoutModal
  },
  quantity: (state) => {
    return state.products.quantity
  },
}

export const mutations = {
  addToCart: (state, id) => {
    state.products.forEach((el) => {
      if (id === el.id) {
        el.isAddedToCart = true
      }
    })
  },
  setAddedBtn: (state, data) => {
    state.products.forEach((el) => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status
      }
    })
  },
  removeFromCart: (state, id) => {
    state.products.forEach((el) => {
      if (id === el.id) {
        el.isAddedToCart = false
      }
    })
  },

  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show
  },
  quantity: (state, data) => {
    state.products.forEach((el) => {
      if (data.id === el.id) {
        el.quantity = data.quantity
      }
    })
  },
}
/* 
  export const actions = {
    async nuxtServerInit({ commit }) {
      const res = await this.$axios.get("/api/current_user")
      commit("SET_USER", res.data)
    },
  
    async logout({ commit }) {
      const { data } = await this.$axios.get("/api/logout")
      if (data.ok) commit("SET_USER", null)
    },
  
    async handleToken({ commit }, token) {
      const res = await this.$axios.post("/api/stripe", token)
      commit("SET_USER", res.data)
    }
  } */
