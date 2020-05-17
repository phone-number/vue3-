import { defineComponent, h, createApp } from 'vue'
export default {
  beforeMount (el, binding) {
    if (!binding.value) return
    let component = defineComponent({
      render() {
        return binding.value(h)
      }
    })
    el.__component__ = createApp(component)
    el.__component__.mount(el)
  },
  beforeUnmount (el) {
    el.__component__ && el.__component__.unmount(el)
    delete el.__component__
  }
}
