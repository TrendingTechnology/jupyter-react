[![Datalayer](https://datalayer.s3.us-east-1.amazonaws.com/datalayer-25.svg)](https://datalayer.io)

# Datalayer Jupyter Docusaurus

`@datalayer/jupyter-docusaurus-plugin`

Docusaurus Plugin to generate a Jupyter Cell.

## Installation

```sh
yarn add @datalayer/jupyter-docusaurus-plugin
```

Modify your `docusaurus.config.js`

```diff
module.exports = {
  ...
+ plugins: ['@datalayer/jupyter-docusaurus-plugin'],
  ...
}
```

## Usage

Support png, gif and jpg only

```jsx
import JupyterCell from '@theme/JupyterCell';

// your react code
<JupyterCell />
```

### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `ideal-img/[name].[hash:hex:7].[width].[ext]` | Filename template for output files. |
| `sizes` | `array` | _original size_ | Specify all widths you want to use; if a specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up). You may also declare a default `sizes` array in the loader options in your `webpack.config.js`. |
| `size` | `integer` | _original size_ | Specify one width you want to use; if the specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up) |
| `min` | `integer` |  | As an alternative to manually specifying `sizes`, you can specify `min`, `max` and `steps`, and the sizes will be generated for you. |
| `max` | `integer` |  | See `min` above |
| `steps` | `integer` | `4` | Configure the number of images generated between `min` and `max` (inclusive) |
| `quality` | `integer` | `85` | JPEG compression quality |
