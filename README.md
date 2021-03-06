# React 'Table'-less Table

## Lightweight React table without constraints of HTML table elements, or an NPM package

### *Includes lazy loading, sorting & column resizing*

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/993af3e3baf648e493dd6e7c8caf4817" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

This is an infinite scroll/lazy load table built in React without the use of any react table libraries. It utilizes the JavaScript `intersecitonObserver` API to implement infinite scroll; `lodash` for column sorting; and an NPM package called `react-column-resizer` is modifed and used here to resize columns.

## Behavior

- As you scroll, new names are fetched in chunks of 10 and added to the sorted list, maintaining the correct order throughout.

- Header remains sticky on top of view window for easy access, changing of sort order.

- Columns are resizable

## Available Scripts

In the project directory `simple-app/`, run:

### `npm install`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits to the code.

### `npm test`

Runs Jest/Enzyme tests.

**TODO:** Add tests for intersectionObserver.

## Why create a reusable table component like this

I wanted to achieve table behavior without HTML `<table>` elements, to more optimally implement lazy loading/infinite scroll. So instead I use what [W3.org refers to as the CSS Table Model](<https://www.w3.org/TR/CSS22/tables.html#tables-intro>). And these are treated as their given display elements during layout. I've also added ARIA accessibility roles for even beter sementics. See [MDN Aria Table for more](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role).

[Using CSS `display` properties, such as `display: table-cell` to dictate that divs and spans should be painted as table elements to the DOM](https://wisdmlabs.com/blog/responsive-tables-using-css-div-tag/) helps get `intersectionObserver` to work seamlessly, appending new div rows to the DOM without `tr`, `tbody` etc. being required.

\**

Let me know how this works for you! Have an addition/change? [Open an issue on this Github repo:](https://github.com/CatPerry/infinite-scroll-table-using-react-and-vanilla-javascript/issues).
