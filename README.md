# fastify-no-cache

[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Fastify plugin to disable client-side caching

## Why?

You may know [no-cache](https://github.com/helmetjs/nocache) as a [no-cache middleware](https://helmetjs.github.io/docs/nocache/) used in [helmet](https://github.com/helmetjs/helmet). And you could use it as a middleware in fastify also. So why i made this plugin?

Benchmark with no plugin:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 32.37   8.9     1139.09
Req/Sec      30444   1051.31 31048
Bytes/Sec    4.53 MB 170 kB  4.63 MB

609k requests in 20s, 90.7 MB read
```

Benchmark with no-cache as middleware:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 30.48   201.15  9999.31
Req/Sec      25386.4 2120.66 26601
Bytes/Sec    7.09 MB 571 kB  7.4 MB

508k requests in 20s, 141 MB read
```

Benchmark with this plugin:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 35.25   8.09    291.3
Req/Sec      28000   1056.51 28805
Bytes/Sec    7.82 MB 302 kB  8.01 MB

560k requests in 20s, 156 MB read
```

So that's the reason and wish you like it. :)

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

- 0.1.0: Init version

## Todo

- Add test case
- Add ci
- Add benchmark scripts

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
