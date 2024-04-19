<p align="center">
  <img src="https://github.com/wangyewei/aquamark/assets/49926816/7c4909f5-1aad-4ec4-94a2-3e6f8bc5e3c7" />
  <br />

  <h3 align="center">Aquamark.js</h3>
  <p align="center">A <b>light-weight</b>, <b>strong</b>, <b>safe</b> and <b>responsive</b> watermark tool for webpage. <br />Based on Canvas & Typescript</p>
<p>

<p align="center">
  <a href="https://github.com/wangyewei/aquamark/blob/main/LICENSE">
    <img alt="GitHub License" src="https://img.shields.io/github/license/wangyewei/aquamark">
  </a>
  <a href="https://github.com/wangyewei/aquamark/actions">
    <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/wangyewei/aquamark/.github%2Fworkflows%2Fcodecov.yml?label=ci">
  </a>
  <a href="https://codecov.io/gh/wangyewei/aquamark" >
    <img src="https://codecov.io/gh/wangyewei/aquamark/graph/badge.svg?token=81CLERUXZQ"/>
  </a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/aquamark">
    <img alt="npm package minimized gzipped size" src="https://img.shields.io/bundlejs/size/aquamark">
  </a>
  <a href="https://www.npmjs.com/package/aquamark">
    <img alt="NPM Unpacked Size" src="https://img.shields.io/npm/unpacked-size/aquamark">
  </a>
</p>

<p align="center">
  <b>Light weight:</b> 1.14kb minified size ;  <b>Safe</b>: Manual removal of watermarks is not allowed; <b>Responsive</b>: Adaptive screen size; <b>Strong</b>: Almost 100% test coverage
  <br />
  <br />
  <b>🚧 Work In Progress 🚧</b><br/>
  currently in active development and not usable for production yet.
</p>

## Installation

Install using `CDN`

```html
<script src="https://unpkg.com/browse/aquamark/dist/index.iife.js"></script>
```

Install using `npm`

```sh
$ npm install aquamark
```

## Basic Usage

In `Browser`

```html
<script src="https://unpkg.com/browse/aquamark/dist/index.iife.js"></script>
<script>
  const aquamark = new Aquamark(/** props */)
  aquamark.init()
</script>
```

In `webpack` or `vite` etc;

```typescript
import Aquamark from "aquamark"
const aquamark = new Aquamark(/** props */)
aquamark.init()
```

## Props

| name    | type                | description       | required | default       |
| ------- | ------------------- | ----------------- | -------- | ------------- |
| content | `string`            | watermark content | `false`  | 'auqamark.js' |
| rotate  | `number`( -180~180) | content rotate    | `false`  | -22           |
| font    | `AuqamarkFont`      | font-related      | `false`  |               |
| top     | `number`            |                   | `false`  | 0             |
| left    | `number`            |                   | `false`  | 0             |
| zIndex  | `number`            | z-index           | `false`  | 0             |

### AquamarkFont

| name       | type                                                | description       | required | default            |
| ---------- | --------------------------------------------------- | ----------------- | -------- | ------------------ |
| color      | `string`                                            | font color        | `false`  | rgba(0, 0, 0, .15) |
| fontSize   | `number`                                            | text size         | `false`  | 22                 |
| fontWeight | `'normal'`, `'light'`, `'weight'`, `number`         | text weight       | `false`  | 'normal'           |
| fontFamily | `string`                                            | text font-famlily | `false`  | 'normal'           |
| textAlign  | `'start'`, `'end'`, `'left'`, `'right'`, `'center'` | text align        | `false`  | 'center'           |

## Methods

| name | description       | parameters |
| ---- | ----------------- | ---------- |
| init | watermark initial | -          |

## License

Aquamark licensed on [MIT LICENSE](./LICENSE). &copy;2024-present [Yev Wang](https://yev.wang)
