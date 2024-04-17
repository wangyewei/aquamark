import { inBrowser } from "./index.esm.js"

const el = document.createElement("h1")
el.innerHTML = `cuurent enviroument is brwser: ${inBrowser}`
document.body.appendChild(el)
