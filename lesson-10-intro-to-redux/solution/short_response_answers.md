# Lesson 8.10 - Introduction to Redux

## Short Response Answers

1. What is the significance of the store in Redux?

- Answer:
  The store holds the application state and supplies the helper methods for accessing the state, register listeners and dispatch actions. There is only one Store while using Redux. The store is configured via the createStorefunction. The single store represents the entire state. Reducers return a state via action. The root reducer is a collection of all reducers in the application.

2. How do reducers work in Redux?

- Answer:
  The state of a store is updated by means of reducer functions. A stable collection of a reducers form a store and each maintains a separate state associated for itself within the store. The initial state and action are received by the reducers. Based on the action type, it returns a new state for the store. The state maintained by reducers are immutable. A given reducer holds the current state and action as an argument and then returns the next state.

3. How are actions used within redux?

- Answer:
  Actions in Redux are functions which return an action object. The action type and the action data are packed in the action object. Actions send data between the store and application. All information is retrieved by the store are produced by the actions.
