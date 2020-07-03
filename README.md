# WIP: Build a React table without a library

This is an infinite scroll/lazy load table built in React without the use of any common react table libraries. It utilizes the JavaScript `intersecitonObserver` API to implement infinite scroll; `lodash` for column sorting; and the one other library used during runtime is `react-column-resizer` to resize columns.

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

## Sources of inspo

[Table behavior without `<table>`](https://wisdmlabs.com/blog/responsive-tables-using-css-div-tag/): Getting intersectionObserver to work requires avoiding HTML `<table>` elements. but the beauty of CSS is that you can acheive that same affect without `<table>` and by instead using the `display` property in CSS.
