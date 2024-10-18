// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .message {
    color: blue;
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div class="message">
    {{ message }}
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

import { createVueComponentWithCSS } from "@jrc03c/vue-component-with-css"

const AppComponent = createVueComponentWithCSS({
  name: "x-app",
  template,

  data() {
    return {
      css,
      message: "Hello from Vue!",
    }
  },
})

export { AppComponent }
