// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Render from './components/Render'
import Gauge from './components/Gauge'
import Store from './store/index'

// import router from './router'

Vue.config.productionTip = false
Vue.config.debug = true

Vue.component('Render', Render)
Vue.component('Gauge', Gauge)
Vue.component('Test', {
  // template: `<h3>{{ num }}</h3>`,
  // computed: {
  //   num: function() {
  //     return this.x + this.y
  //   }
  // },
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.x++
    }, 2000)
  },
  render: function (createElement) {
    console.log(this.$watch)
    return createElement('h3', 'haha')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  store: Store,
  components: { App },
  template: '<App/>'
})
