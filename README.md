[![Datalayer](https://datalayer.s3.us-east-1.amazonaws.com/datalayer-25.svg)](https://datalayer.io)

# Jupyter React

> ⚛️ React.js components for Jupyter.

<div align="center" style="text-align: center">
  <img alt="Jupyter Editor" src="https://docs.datalayer.io/assets/images/jupyter-editor-2f39f51a4596173b8ffcf33d62ec5278.gif" />
</div>

This repository provides [React.js](https://reactjs.org) components compatible with the [Jupyter](https://jupyter.org) ecosystem to create your own custom `Data Product`. The below image shows a gallery of the available components while the above image shows an usage example of some of those components in a React.js application `a-la-google-docs`.

<div align="center" style="text-align: center">
  <img alt="Jupyter Editor" src="https://docs.datalayer.io/assets/images/gallery-d29737240a1e3cc60b8f3b4676ccc07f.gif" />
</div>

Please open [issues](https://github.com/datalayer/datalayer/issues) for questions, feature requests, bug reports... We also welcome [pull requests](https://github.com/datalayer/datalayer/pulls).

Follow the below steps to create your development environment (you will need [Miniconda](https://docs.conda.io/en/latest/miniconda.html) up-and-running your machine).

```bash
# Clone this repository.
git clone https://github.com/datalayer/jupyter-react.git && \
  cd jupyter-react
```

```bash
# Setup your development environment.
conda deactivate && \
  make env-rm # If you want to reset your env.
make env && \
  conda activate datalayer
```

```bash
# Clean, install and build.
make clean install build
```

You can launch local examples and hack the source code. The changes will be automatically built and available in your browser.

```bash
# Start editor example.
echo open http://localhost:3266
yarn jupyter:editor
```

```bash
# Start jupyter widgets example.
echo open http://localhost:3208
yarn jupyter:widgets
```

```bash
# Start jupyter widgets example.
echo open http://localhost:3248
yarn example:jupyter:widgets
```

```bash
# Start light theme example.
echo open http://localhost:2043
yarn jupyter:theme:light
```
<!--
## 🚧 Static Example

You can build a static example website that will be available under the `example/.out` folder.

```bash
# This will open example/.out/index.html in your browser.
make example-example && \
  open example/.out/index.html
```

You can deploy the example in your [Vercel](https://vercel.com) (former Now.js) account. Ccnfigure a vercel `datalayer-jupyter-react-example` project with:

- Build command: `yarn build:vercel`
- Output directory: `storybook/.out`.

Then run the following command to deploy in you vercel.

```bash 
# Deploy the example (if you have karma for).
# open https://api/jupyter.datalayer.io
make example-deploy
```
-->
## License

Copyright (c) 2021 Datalayer, Inc.

Released under the terms of the MIT license (see LICENSE).
