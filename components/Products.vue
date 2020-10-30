<template>
  <div>
    <v-row>
      <v-card outlined class="mx-auto">
        <figure class="image is-4by3">
          <img
            height="300"
            width="500"
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ product.title }}</p>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ product.description }}</p>
            </div>
            <div class="card-footer btn-actions">
              <div class="card-footer-item field is-grouped">
                <div class="buttons">
                  <v-btn
                    color="red"
                    class="button is-primary"
                    v-if="!product.isAddedToCart"
                    @click="addToCart(product.id)"
                  >
                    {{ addToCartLabel }}
                  </v-btn>
                  <v-btn
                    color="red"
                    class="button is-text"
                    v-if="product.isAddedToCart"
                    @click="removeFromCart(product.id, false)"
                  >
                    {{ removeFromCartLabel }}
                  </v-btn>
                </div>
                <div class="select is-rounded is-small">
                  <select
                    @change="onSelectQuantity(product.id)"
                    v-model="selected"
                  >
                    <option
                      v-for="quantity in quantityArray"
                      v-bind:key="quantity"
                      :value="quantity"
                    >
                      {{ quantity }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <nuxt-link
            class="details"
            :to="{
              name: 'product_detail-id',
              params: {
                id: product.id,
                title: product.title,
                price: product.price,
                isAddedBtn: product.isAddedBtn,
              },
            }"
          >
          </nuxt-link>
        </div>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'products',
  props: ['product'],

  data() {
    return {
      addToCartLabel: 'Add to cart',
      viewDetailsLabel: 'Details',
      removeFromCartLabel: 'Remove from cart',
      selected: 1,
      quantityArray: [],
    }
  },

  mounted() {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i)
    }

    if (this.$props.product.quantity > 1) {
      this.selected = this.$props.product.quantity
    }
  },

  computed: {},

  methods: {
    addToCart(id) {
      const data = {
        id: this.id,
        status: true,
      }
      this.$store.commit('addToCart', id)
      this.$store.commit('setAddedBtn', data)
    },
    removeFromCart(id) {
      const data = {
        id: this.id,
        status: false,
      }
      this.$store.commit('removeFromCart', id)
      this.$store.commit('setAddedBtn', data)
    },
    onSelectQuantity(id) {
      const data = {
        id: this.id,
        quantity: this.selected,
      }
      this.$store.commit('quantity', data)
    },
  },
}
</script>
