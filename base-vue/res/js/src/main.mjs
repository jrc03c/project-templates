import { createApp } from "vue/dist/vue.esm-browser.prod.js"
import { AppComponent } from "./app.mjs"

const app = createApp(AppComponent)
app.mount("#app")
