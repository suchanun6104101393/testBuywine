<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6" v-for="item in products" v-bind:key="item">
            <v-card height="300" width="200" align="center">
              <v-img height="200" width="200" :src="item.image" />
              <div class="card-body">
                <h4 align="center" class="card-title">{{ item.name }}</h4>
                <p align="center" class="card-text">
                  ราคา {{ item.price }} บาท
                </p>
              </div>
              <div class="card-footer">
                <v-btn class="btn btn-primary" @click="addCart(item)">
                  หยิบลงตะกร้า
                </v-btn>
              </div>
            </v-card>
          </div>
        </div>
      </div>
      <v-card class="col-md-5 my-5">
        <h4>
          ตะกร้าสินค้า
          <i class="fa fa-shopping-cart"></i>
        </h4>
        <hr />
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ภาพ</th>
              <th scope="col">ชื่อ</th>
              <th scope="col">ราคา</th>
              <th scope="col">จำนวน</th>
              <th scope="col">ยอดรวม</th>
              <th scope="col">ลบ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in carts" v-bind:key="product">
              <td>
                <v-img
                  :src="product.image"
                  alt=""
                  width="80px"
                  height="100px"
                />
              </td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>
                <i class="fa fa-minus qty-minus" @click="minusQty(product)"></i>
                {{ product.qty }}
                <i class="fa fa-plus qty-plus" @click="plusQty(product)"></i>
              </td>
              <td>{{ product.total }}</td>
              <td>
                <v-btn class="btn-danger" @click="removeProduct(product)">
                  <i class="fa fa-trash"></i>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </table>
        <h1 align="center">ยอดชำระเงิน {{ total() }} บาท</h1>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      carts: [],
      wine1: 0,
      wine2: 0,
      wine3: 0,
      wine4: 0,
      wine5: 0,
      wine6: 0,
      wine7: 0,
      wine8: 0,
      wine9: 0,
      wine10: 0,
      wine11: 0,
      wine12: 0,
      products: [
        {
          id: 1,
          name: 'ไวน์องุ่น',
          price: 30,
          image:
            'https://1.bp.blogspot.com/-wEU6zOjp_6k/T916OuNABPI/AAAAAAAAABA/SOBkwrQu4h4/s320/red_wine.jpg',
          active: false,
        },
        {
          id: 2,
          name: 'ไวน์แดง',
          price: 30,
          image:
            'https://winethai.files.wordpress.com/2011/09/e0b984e0b8a7e0b899e0b98ce0b981e0b894e0b8871.jpg',
          active: false,
        },
        {
          id: 3,
          name: 'ไวน์แดง',
          price: 30,
          image:
            'https://winethai.files.wordpress.com/2011/09/e0b984e0b8a7e0b899e0b98ce0b981e0b894e0b8871.jpg',
          active: false,
        },
        {
          id: 4,
          name: 'ไวน์แดง',
          price: 30,
          image:
            'https://winethai.files.wordpress.com/2011/09/e0b984e0b8a7e0b899e0b98ce0b981e0b894e0b8871.jpg',
          active: false,
        },
        {
          id: 5,
          name: 'ไวน์แดง',
          price: 30,
          image:
            'https://winethai.files.wordpress.com/2011/09/e0b984e0b8a7e0b899e0b98ce0b981e0b894e0b8871.jpg',
          active: false,
        },
        {
          id: 6,
          name: 'ไวน์แดง',
          price: 30,
          image:
            'https://winethai.files.wordpress.com/2011/09/e0b984e0b8a7e0b899e0b98ce0b981e0b894e0b8871.jpg',
          active: false,
        },
        {
          id: 7,
          name: 'ไวน์แดง',
          price: 30,
          image:
            'https://winethai.files.wordpress.com/2011/09/e0b984e0b8a7e0b899e0b98ce0b981e0b894e0b8871.jpg',
          active: false,
        },
        {
          id: 8,
          name: 'ไวน์แดง',
          price: 30,
          image:
            'https://winethai.files.wordpress.com/2011/09/e0b984e0b8a7e0b899e0b98ce0b981e0b894e0b8871.jpg',
          active: false,
        },
        {
          id: 9,
          name: 'ไวน์แดง',
          price: 30,
          image:
            'https://winethai.files.wordpress.com/2011/09/e0b984e0b8a7e0b899e0b98ce0b981e0b894e0b8871.jpg',
          active: false,
        },
        {
          id: 10,
          name: 'ไวน์แดง',
          price: 30,
          image:
            'https://winethai.files.wordpress.com/2011/09/e0b984e0b8a7e0b899e0b98ce0b981e0b894e0b8871.jpg',
          active: false,
        },
        {
          id: 11,
          name: 'ไวน์แดง',
          price: 30,
          image:
            'https://winethai.files.wordpress.com/2011/09/e0b984e0b8a7e0b899e0b98ce0b981e0b894e0b8871.jpg',
          active: false,
        },
        {
          id: 12,
          name: 'ไวน์แดง',
          price: 30,
          image:
            'https://winethai.files.wordpress.com/2011/09/e0b984e0b8a7e0b899e0b98ce0b981e0b894e0b8871.jpg',
          active: false,
        },
      ],
    }
  },
  methods: {
    addCart(item) {
      if (item.id === 1) {
        this.wine1 += 1
        if (this.wine1 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      } else if ((this.wine2 += 1)) {
        if (this.wine2 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      } else if ((this.wine3 += 1)) {
        if (this.wine3 <= 1) {
          this.pushData(item)
        } else {
          const found = this.findIndex(item)
          this.carts[found].qty += 1
          this.carts[found].total =
            this.carts[found].qty * this.carts[found].price
        }
      }
    },
    pushData(item) {
      this.carts.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        qty: 1,
        total: item.price,
      })
    },
    findIndex(item) {
      for (let i = 0; i < this.carts.length; i++) {
        if (this.carts[i].id === item.id) {
          return i
        }
      }
      return -1
    },
    minusQty(product) {
      product.qty -= 1
      if (product.qty <= 14) {
        product.qty = 14
      }
      product.total = product.price * product.qty
    },
    plusQty(product) {
      product.qty += 1
      product.total = product.price * product.qty
    },
    removeProduct(product) {
      if (confirm('คุณต้องการลบหรือไม่ ?')) {
        const index = this.carts.indexOf(product)
        this.carts.splice(index, 1)
        if (product.id === 1) {
          this.wine1 = 0
        } else {
          this.wine2 = 0
        }
      }
    },
    total() {
      let sum = 0
      this.carts.forEach(function (item) {
        sum += item.total
      })
      return sum
    },
  },
}
</script>
<style scoped>
.qty-minus {
  cursor: pointer;
  margin-right: 20px;
}
.qty-plus {
  cursor: pointer;
  margin-left: 20px;
}
</style>
