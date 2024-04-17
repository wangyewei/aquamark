import fg from "fast-glob"
import { copy } from "fs-extra"

const distRegx = /^dist\//
const playground = "playgrounds"

fg.sync("dist/**").forEach(async (file) => {
  if (file.endsWith(".d.ts")) return
  const identifier = file.split(".")[1]
  copy(file, file.replace(distRegx, `${playground}/${identifier}/`))
})
