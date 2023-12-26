const { execSync } = require("node:child_process")
const process = require("node:process")
const watch = require("@jrc03c/watch")

function rebuild() {
  console.log("\n-----\n")
  console.log(`Rebuilding... (${new Date().toLocaleString()})`)

  try {
    execSync(`esbuild res/js/src/main.js --bundle --outfile=res/js/bundle.js`, {
      encoding: "utf8",
    })

    console.log("\nDone! 🎉\n")
  } catch (e) {
    console.error(e)
  }
}

if (process.argv.indexOf("-w") > -1 || process.argv.indexOf("--watch") > -1) {
  watch({
    target: ".",
    exclude: ["bundle.js", "node_modules"],
    created: rebuild,
    modified: rebuild,
    deleted: rebuild,
  })
}

rebuild()
