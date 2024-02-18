// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ ``

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="x-app">
    <x-message :text="message"></x-message>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

const createVueComponentWithCSS = require("@jrc03c/vue-component-with-css")
const MessageComponent = require("../components/message")

module.exports = createVueComponentWithCSS({
  name: "x-app",
  template,

  components: {
    "x-message": MessageComponent,
  },

  data() {
    return {
      css,
      message: "Hello from Vue!",
    }
  },
})
