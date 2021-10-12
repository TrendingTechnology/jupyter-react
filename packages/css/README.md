[![Datalayer](https://datalayer.s3.us-east-1.amazonaws.com/datalayer-25.svg)](https://datalayer.io)

# Jupyter React Utils CSS

```bash
yarn && \
  yarn build && \
  yarn css
```

Add to package.json

```
    "prepublishOnly": "npm test && npm run lint",
    "preversion": "npm run lint",
    "version": "npm run format && git add -A src",
    "postversion": "git push && git push --tags"
```