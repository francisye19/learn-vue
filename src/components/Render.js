import { mapGetters, mapState } from 'vuex'
import { mapPropsModels } from '../helper/assist'
import store from '../store/index'

export default {
  name: 'Render',
  data() {
    return {
      apples: [{
        id: 1,
        price: 5
      }, {
        id: 2,
        price: 5.4
      }, {
        id: 3,
        price: 4.5
      }],
      x: 15,
      y: 16
    }
  },
  // computed: {
  //   // meanPrice: function () {
  //   //   return this.apples
  //   //     .map(apple => apple.price)
  //   //     .reduce((acc, sum) => acc + sum, 0) / this.apples.length
  //   // },
  //   // ...mapGetters(['getComputed'])
  //   ...mapPropsModels(['age']),
  //   // ...mapState({
  //   //   age: state => state.register.age
  //   // })
  //   // mean: eval('(function() {return (this.x + this.y) / 2})')
  //   // ...mapGetters(['getComputed'])
  // },
  // computed: (fuction(){
  //   let json = this.$store.state.register
  //   let computed = JSON.parse(json)
  //   console.log(computed)
  //   for (let prop in computed) {
  //     computed[prop] = eval(computed[prop])
  //   }
  //   return computed
  // })(),
  // beforeCreate() {
  //   // let that = this
  //   this.$options.computed = (() => {
  //     let json = this.$store.state.register
  //     let computed = JSON.parse(json)
  //     console.log(computed)
  //     for (let prop in computed) {
  //       computed[prop] = eval(computed[prop])
  //     }
  //     return computed
  //   })()
  // },
  // props: {
  //   data: this.$store.state.data
  // },
  methods: {
    getComputed() {
      let json = this.$store.state.register
      let computed = JSON.parse(json)
      computed = computed.map((key, val) => {
        val = eval(val)
      })
      return computed
    }
  },
  props: {
    soul: [Object]
  },
  render: function (h) {
    // return h('div', {
    //   style: {
    //     color: 'red'
    //   },

    // }, [
    //     h('label', {
    //       domProps: {
    //         innerHTML: '平均温度:' + eval(this.$store.state.fn)
    //       }
    //     }),
    //     h('h1', '温度2:' + this.$store.state.data.temp2)
    //   ])
    if (!this.soul) return
    // h.$util = {
    //   getFormItemParams,
    //   refs
    // }
    h.vm = this
    h.store = store
    // h.eventCenter = eventCenter
    // eventCenter.createElement = h
    return this.soul.render(h)
  }
}
