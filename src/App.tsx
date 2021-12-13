import React, { Reducer, useContext, useReducer, useState } from 'react'
import KmsChild from './KmsChild';
import { UserContext } from './UserContext';
type State = string[]
interface Todo {
  payload: string
  type: string
}

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO"
const reducer: Reducer<State, Todo> = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      const copiedState = [...state];
      copiedState.splice(copiedState.indexOf(action.payload), 1);
      return copiedState
    default:
      return state
  }
}
const App = () => {
  const [todo, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState('');
  const [name, setName] = useState('kms');
  return (
    <div>
      <input type="text" value={input} onChange={(e) => {
        setInput(e.currentTarget.value)
      }} /><button onClick={() => { dispatch({ type: ADD_TODO, payload: input }); setInput('') }}>Input</button>
      <div>{todo}</div>
      <UserContext.Provider value={{ name, setName }}>
        <KmsChild />
      </UserContext.Provider>
    </div>
  )
}

export default App
