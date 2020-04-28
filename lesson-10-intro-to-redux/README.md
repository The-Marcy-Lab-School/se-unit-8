# Lesson 8.10 - Introduction to Redux

## Lesson Overview

### Key Terms:

- Redux
- Redux Dev Tools
- immutability
- store
- reducers
- actions
- `createStore()`
- `getStore()`
- `combineReducers()`

### Essential Questions:

- What are the benefits of using Redux?
- Which functional programming concepts are present in the implementation of Redux in a web application?
- How does Redux affect application state?
- What is a typical flow of data in a React + Redux application?

### Learning Assignments:

- Learn about the [Motivation behind building Redux](https://redux.js.org/introduction/motivation), the [Core Concepts](https://redux.js.org/introduction/core-concepts), and the [Three Principles](https://redux.js.org/introduction/three-principles).
- Skim and bookmark documentation to the [`createStore()` API](https://redux.js.org/api/createstore), [`getStore()`](https://redux.js.org/api/store#getstate) and [`combineReducers()`](https://redux.js.org/api/combinereducers)
- Read the [basic tutorial](https://redux.js.org/basics/basic-tutorial) about redux in the Redux docs, which uses a to-do list example.
- Watch or code along with any redux topics you'd like to dive deeper on through this ["Getting Started with Redux"](https://egghead.io/courses/getting-started-with-redux) video series on Egghead.io. For this lesson, do not pass the video on [Passing the Store Down](https://egghead.io/lessons/react-redux-passing-the-store-down-implicitly-via-context)
- OPTIONAL: Download the [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) extension, which will be used more in future lessons.

### Practice:

I. Write answers the [short response questions](practice/short_response.md).

II. Next create a new version of counter app using class components and incorporating redux to handle state. Here is some guidance

- cd `practice/counter-2`.
- Run `npm install` in one termnial.
- Open a second terminal and run `npm test`. If tests do not run automatically then press **Enter** to trigger a test run of the current test suite or **a** to trigger a run of all tests.
- Here is a recommend order to start coding out components:

  1. `src/index.js` - set up the store
  2. `src/reducers/index.js` - set up the reducer
  3. `src/index.js` - import reducers
  4. `src/components/Counter.js` - create the counter component

- Follow the tests within `src/components/Counter.test.js` and `src/reducers/index.test.js` in order to successful create this application.

- Once all tests are passing, run `npm start` from a another terminal. You can view your app in localhost:3000 and (optionally) use the the Redux developer tools.
