# fastify-no-cache

[![Build Status][ci-img]][ci-url]
[![Code coverage][cov-img]][cov-url]
[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Fastify plugin to disable client-side caching

## Why?

You may know [no-cache](https://github.com/helmetjs/nocache) as a [no-cache middleware](https://helmetjs.github.io/docs/nocache/) used in [helmet](https://github.com/helmetjs/helmet). And you could use it as a middleware in fastify also. So why i made this plugin?

You may find the reason in [benchmark result](./benchmarks/benchmark.txt) and wish you like it. :)

## Difference

This plugin has passed all [no-cache](https://github.com/helmetjs/nocache) test cases.
And no difference in options.

## Install

Via npm:

```shell
npm i fastify-no-cache
```

Via yarn:

```shell
yarn add fastify-no-cache
```

## Usage

```js
const fastify = require('fastify');
const fastifyNoCache = require('fastify-no-cache');

const app = fastify();
app.register(fastifyNocache);

app.listen(3000, err => {
  if (err) throw err;
});
```

## Changelog

- 0.2.0
  - Add test case
  - Add code coverage
  - Add benchmarks
- 0.1.0:
  - Init version

[ci-img]: https://img.shields.io/travis/poppinlp/fastify-no-cache.svg?style=flat-square
[ci-url]: https://travis-ci.org/poppinlp/fastify-no-cache
[cov-img]: https://img.shields.io/coveralls/poppinlp/fastify-no-cache.svg?style=flat-square
[cov-url]: https://coveralls.io/github/poppinlp/fastify-no-cache?branch=master
[lint-img]: https://img.shields.io/badge/code%20style-handsome-brightgreen.svg?style=flat-square
[lint-url]: https://github.com/poppinlp/eslint-config-handsome
[dep-img]: https://img.shields.io/david/poppinlp/fastify-no-cache.svg?style=flat-square
[dep-url]: https://david-dm.org/poppinlp/fastify-no-cache
[dev-dep-img]: https://img.shields.io/david/dev/poppinlp/fastify-no-cache.svg?style=flat-square
[dev-dep-url]: https://david-dm.org/poppinlp/fastify-no-cache#info=devDependencies
[npm-ver-img]: https://img.shields.io/npm/v/fastify-no-cache.svg?style=flat-square
[npm-dl-img]: https://img.shields.io/npm/dm/fastify-no-cache.svg?style=flat-square
[npm-lc-img]: https://img.shields.io/npm/l/fastify-no-cache.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/fastify-no-cache
