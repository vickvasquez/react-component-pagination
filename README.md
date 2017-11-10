# react-component-pagination
A simple component stateless for create pagination from external data

## Install

```
npm i -S react-component-pagination

```

## Usage

```js
import React from 'react'
import ReactDom from 'react-dom'
import Pagination from 'react-component-pagination'

const App = () => (
	<Pagination 
		pages={0}
		page={100}
		onClick={ page => console.log(`Page selected ${page}`) }
	/>
)

ReactDom.render(<App />,document.getElementById('root'))
```

It renders something like:

```html
<ul class="index__pagination___sk_9O">
    <button class="index__itemPagination___S-Ybn" disabled="">&lt;</button>
    <button class="index__itemPagination___S-Ybn" disabled="">&lt;&lt;</button>
    <button class="index__pageCurrent___-4MRX">1</button>
    <button class="index__itemPagination___S-Ybn">2</button>
    <button class="index__itemPagination___S-Ybn">3</button>
    <button class="index__itemPagination___S-Ybn">4</button>
    <button class="index__itemPagination___S-Ybn">5</button>
    <button class="index__itemPagination___S-Ybn">6</button>
    <button class="index__itemPagination___S-Ybn">7</button>
    <button class="index__itemPagination___S-Ybn">8</button>
    <button class="index__itemPagination___S-Ybn">9</button>
    <button class="index__itemPagination___S-Ybn">10</button>
    <button class="index__itemPagination___S-Ybn">&gt;&gt;</button>
    <button class="index__itemPagination___S-Ybn">&gt;</button>
</ul>
```
[See example using redux and API of Giphy](https://github.com/vickvasquez/practices-redux/blob/master/app-ghipy/src/containers/index.js/)

## Props
Pagination is the Pagination component itself, it can receive the following properties:
* ```onClick``` {Function} Triggered when the user clicks on a page and the pages should be changed. **Required**.
* ```pages``` {Number} Total number of pages. **Required**.
* ```page``` {Number} Current page. **Required**.
* ```numberPages``` {Number} Number of pages to display. **Default: 10**.