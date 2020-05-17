import { defineComponent, h } from 'vue'
export default defineComponent({
  props: {
    render: Function
  },
  render(ctx) {
    return ctx.$props.render(h)
  }
})
