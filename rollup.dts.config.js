//@ts-check
import { resolve } from "path"
import { fileURLToPath } from "url"

import dts from "rollup-plugin-dts"

const __dirname = fileURLToPath(new URL(".", import.meta.url))

const r = (/** @type string */ p) => resolve(__dirname, p)

/** @type import('rollup').RollupOptions */
const config = {
  input: r("src/index.ts"),
  output: {
    file: r("dist/index.d.ts"),
    format: "es",
  },
  plugins: [dts()],
}

export default config
