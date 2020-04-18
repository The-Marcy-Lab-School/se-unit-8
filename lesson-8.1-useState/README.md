# Lesson 8.1: Props vs State

### Key Terms

- state
- props
- hooks
- useState()

### Essential Questions

- What is state and what are props (properties)?
- How do state and props differ?
- What are React hooks?
- How do we use the `useState()` hook?
- What are the rules and restrictions of use state?

### Learning Assignments

- Learn about the React hook called `useState()`. Follow along with this [popular tutorial](https://www.youtube.com/watch?v=9xhKH43llhU), which is about 15 minutes long.

- Here are descriptions about the differences between [state and props](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md).

- [React documentation on useState()](https://reactjs.org/docs/hooks-state.html)

- [React documentation on props](https://reactjs.org/docs/components-and-props.html#function-and-class-components)

- OPTIONAL: Read the introduction to the [React Testing Library](https://testing-library.com/docs/intro), which will is used to test your practice. You will not need to implement your own tests. Hopefully the documentation can give you an idea of what's happening behind the scenes.

### Practice

- `cd practice/counter-app`
- `npm install`
- open two terminals
- in the first terminal, run `npm start`
- view the app in localhost:3000 (this should open automatically with `npm start`)
- in the second terminal, run `npm test`. Tests will run automatically when you update the <App/> component. But you can also ENTER `a` in order to manually re-run tests.
- Follow the tests in `practice/counter-app/App.tests.js` in order to create a counter application.
