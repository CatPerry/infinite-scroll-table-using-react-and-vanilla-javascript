# WIP: Build a React table without a library

This is an infinite scroll/lazy load table built in React without the use of any common react table libraries. It utilizes the JavaScript `intersecitonObserver` API to implement infinite scroll; `lodash` for column sorting; and the one other library used during runtime is `react-column-resizer` to resize columns.

TODO:<br />
Expected: Efficiently re-render entire list if column is sorted
Current: This is just sorting the _next_ rows that are attached, so you see no sorting in 'real time', but you see the entire list re-sorted (with new rows attached) if you scroll down. Needs fixing. However, sorting and infinite scroll seem like anti-patterns of each other, but I took a crack at it.

Expected: Column resizer should apply to all columns
Current: Because this is rendered as many tables appended to each other, the column resizer, sort etc are only applied to the 'current table' in view. It's done this way because appending table rows without `tbody` or by using a `React.Fragment` throws an error. Needs fixing.

Expected: Infite scroll should only append new fetches
Current: In order to get the sorting to work I actually reappend the people already in `this.state.people` while adding and sorting newly fetched people. I can acheive the expected behavior by changing what is set in state on `line:36`, but then sorting doesnt work.

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`
