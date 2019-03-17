export function mapPropsModels(props = [], ref) {
  return props.reduce((obj, prop) => {
    const propModel = prop + 'Model'
    // const computedProp = {
    //   get() {
    //     return object ? this[object][prop] : this[prop]
    //   },
    //   set(value) {
    //     if (event) {
    //       this.$emit(event, { prop, value })
    //     } else {
    //       this.$emit(prop, value)
    //     }
    //   }
    // }
    const computedProp = '(function(){return this.x+this.y})'
    obj[propModel] = eval(computedProp)
    return obj
  }, {})
}