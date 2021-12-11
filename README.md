# **watchword**

![NPM Downloads](https://img.shields.io/npm/dw/watchword)
![NPM License](https://img.shields.io/npm/l/watchword)
[![Twitter](https://img.shields.io/twitter/follow/snowbitCoderboi.svg?style=social&label=snowbitCoderboi)](https://twitter.com/snowbitCoderboi)
[![GitHub followers](https://img.shields.io/github/followers/snowbit-coderboi?label=Follow%20Me&style=social)](https://github.com/snowbit-coderboi)
[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCNTKqF1vhFYX_v0ERnUa1RQ?label=Subscribe%20Now&style=social)](https://www.youtube.com/channel/UCNTKqF1vhFYX_v0ERnUa1RQ)

---

## **Getting Started**

**A NPM Package which generates random high secure password**
[![NPM](https://nodei.co/npm/watchword.png)](https://nodei.co/npm/watchword/)

```bash
$ npm i watchword
```

## **Installation**

This is a [Node JS](https://nodejs.org/en/) available through [NPM Registry](https://www.npmjs.com/)

Before installing, [download and install Node js](https://nodejs.org/en/download/)

After that, installation is done using `npm install` command.

```bash
$ npm i watchword
```

## **Usage**
```js
const watchword = require('watchword')

console.log(watchword.Password(n))
// where n is the length of the password
```
For Example, 
```js
const watchword = require('watchword')

console.log(watchword.Password(16))

// #Q!gT4#EiV1#$9bq
```