import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: {
      temp1: 0,
      temp2: 0,
      temp3: 0
    },
    soul: {
      fn: function(data) {
        return (data.temp1 + data.temp2) / 2
      },
      render: function(h) {
        // const context = this
        const store = h.store
        // console.log(this)
        return h('div',[
          h('h1', {
            domProps: {
              innerHTML: this.fn(store.state.data)
            }
          }),
          h('Gauge', {
            props: {
              soul: {
                model: {
                  title: '光强',
                  height: '200px',
                  width: '200px',
                  max: 100,
                  min: 0,
                  unit: 'lux',
                  data: store.state.data.temp1 * 100
                }
              }
            }
          }),
          h('h1', {
            domProps: {
              innerHTML: store.state.data.temp1
            }
          })
        ])
      }
    },
    fn: '(function() {return (this.$store.state.data.temp1+this.$store.state.data.temp2)/2})()',
    register: '{"mean":"(function(){return this.$store.state.data.temp1+this.$store.state.data.temp2})"}'
  },
  getters: {
    // getComputed: state => (state.data.temp1 + state.data.temp2) / 2
    getComputed: state => state.register,
    soul: state => state.soul
  },
  mutations: {
    modifyData: (state, payload) => {
      state.data[payload.key] = payload.val
    },
    editComputed: (state, register) => state.register = register
  }
});

export default store