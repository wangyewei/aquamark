<p align="center">
  <img src="https://github.com/wangyewei/aquamark/assets/49926816/7c4909f5-1aad-4ec4-94a2-3e6f8bc5e3c7" />
  <br />

  <h3 align="center">Aquamark.js</h3>
  <p align="center">watermark for webpage based on canvas & typescript</p>
<p>

<p align="center">
  <a href="https://github.com/wangyewei/aquamark/blob/main/LICENSE">
    <img alt="GitHub License" src="https://img.shields.io/github/license/wangyewei/aquamark">
  </a>
  <a href="https://github.com/wangyewei/aquamark/actions">
    <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/wangyewei/aquamark/.github%2Fworkflows%2Fci.yml?label=ci">
  </a>
</p>


<p align="center">
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
  const aquamark = new Aquamark(/** configs */)
  aquamark.init()
</script>
```

In `webpack` or `vite` etc;
```typescript
import Aquamark from 'aquamark'
const aquamark = new Aquamark(/** configs */)
aquamark.init()
```

## License

Aquamark licensed on [MIT LICENSE](./LICENSE). &copy;2024-present [Yev Wang](https://yev.wang)
