// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import ElementUI from 'element-ui';
// import Vuex from 'vuex'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)


// Vue.use(ElementUI);
// Vue.use( Vuex );

// Vue.config.productionTip = false


// const store = new Vuex.Store({
//   state:{ 
//     products: [
//       {name: '鼠标', price: 20},
//       {name: '键盘', price: 40},
//       {name: '耳机', price: 60},
//       {name: '显示屏', price: 80}
//     ]
//   },
//   getters:{ //添加getters
//     saleProducts: (state) => {
//       let saleProducts = state.products.map( product => {
//         return {
//           name: product.name,
//           price: product.price / 2
//         }
//       })
//       return saleProducts;
//     }
//   } ,
//   mutations:{ //添加mutations
//     minusPrice (state, payload ) {
//       let newPrice = state.products.forEach( product => {
//         product.price -= payload
//       })
//     },
      
//   },
//   actions:{ //添加actions
//       minusPriceAsync( context, payload ) {
//         setTimeout( () => {
//           context.commit( 'minusPrice', payload ); //context提交
//         }, 2000)
//       }
//     }
// })
// new Vue({
//   el: '#app',
//   store,
//   router,
//   render: h => h(App)
// })




import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios,axios);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
