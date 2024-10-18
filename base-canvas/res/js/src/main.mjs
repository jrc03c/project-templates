const width = 512
const height = width
const canvas = document.createElement("canvas")
canvas.width = width
canvas.height = height
document.body.appendChild(canvas)

const context = canvas.getContext("2d")
context.fillStyle = "red"
context.fillRect(0, 0, width, height)
