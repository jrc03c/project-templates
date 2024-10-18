import globals from "globals"
import html from "eslint-plugin-html"
import pluginJs from "@eslint/js"

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    plugins: { html },
  },
  pluginJs.configs.recommended,
]