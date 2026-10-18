# Target identity excerpt — unfinished PointBuild prototype

This source-derived excerpt demonstrates how route, source context, identity strategy, and a repeated-instance hint contribute to a target ID. TypeScript annotations were removed for a dependency-free Node.js example; the hash and ID composition are unchanged.

## Run

With Node.js 22 or newer, from this directory:

```sh
node --test target-identity.test.cjs
node demo.cjs
```

## What it demonstrates

Two visually identical buttons in a repeated component should not automatically become the same edit target. The tests exercise separation across repeated items, routes, and source locations, plus identity preservation for unchanged context.

This is one small part of an **unfinished local prototype**. It does not implement the Vite/Babel instrumentation, source lookup, patch validation, editor UI, or Git history described in the case study.

The compact hash is non-cryptographic and can collide; it is not an authorization mechanism or a proof of globally unique identity. Identity hints are expected to come from the controlled instrumentation/selection pipeline, not arbitrary untrusted input.

## Automated checks

The [public sample workflow](../.github/workflows/sample-checks.yml) runs the focused tests and synthetic demo on pushes and pull requests. It uses no application credentials or private repositories. Passing these checks does not certify the complete private application or its deployment.
