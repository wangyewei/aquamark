import { createRequire } from 'module'
import path, { resolve } from 'path'
import { type ExternalOption, type OutputOptions, type Plugin, type RollupOptions } from 'rollup'
import { fileURLToPath } from 'url'

import json from '@rollup/plugin-json'
import alias from '@rollup/plugin-alias'
import esbuild from 'rollup-plugin-esbuild'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const _require = createRequire(import.meta.url)
const r = (p: string) => resolve(__dirname, p)

const pkg = _require(resolve(__dirname, 'package.json'))

const defaultFormats = ['esm', 'cjs', 'global'] as const
type BuildFomat = typeof defaultFormats[number]

const outputConfig: Record<BuildFomat, OutputOptions> = {
  'esm': {
    file: r('dist/index.esm.js'),
    format: 'es'
  },
  'cjs': {
    file: r('dist/index.cjs.js'),
    format: 'cjs'
  },
  'global': {
    file: r('dist/index.iife.js'),
    format: 'iife'
  }
}

const buildFormats = defaultFormats
const rollupConfigs = buildFormats.map(
  format => createConfig(format)
)

export default rollupConfigs

function createConfig(
  format: BuildFomat,
): RollupOptions {
  const output = outputConfig[format]

  if (!output) {
    console.log('Invalid format:', format)
    process.exit(1)
  }

  output.banner = `
  /**
   * ${pkg.name} v${pkg.version} 
   * (c) 2024-preset Yewei (Yev) Wang
   * @license MIT
   **/
  `

  const isCJSBuild = format === 'cjs'
  const isGLOBALBuild = format === 'global'

  if (isCJSBuild) {
    output.esModule = true
  }

  if (isGLOBALBuild) {
    output.name = 'Aquamark'
  }

  output.sourcemap = false
  output.externalLiveBindings = false
  output.reexportProtoFromExternal = false

  return {
    input: r('src/index.ts'),
    output,
    external: resolveExternals(),
    plugins: [
      json(),
      alias(),
      esbuild({
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        minify: false,
        target: isCJSBuild ? 'es2019' : 'es2015'
      }),
      ...resolveNodePlugins(isCJSBuild)
    ]
  }
}

// on hold
// there is nothing need be externaled at this time
function resolveExternals(): ExternalOption {
  return [
    // ...Object.keys(pkg.dependencies),
    // ...Object.keys(pkg.peerDependencies)
  ]
}

function resolveNodePlugins(isCJSBuild: boolean): Plugin[] {
  if (isCJSBuild) {
    return [
      commonjs(),
      nodeResolve()
    ]
  }
  return []
}