import React, { useState, useMemo, useContext, useReducer } from "react";

const CountContext = React.createContext();

function countReducer(state, action) {
  switch (action.type) {
    case "NEW_TAB":
      return { ...state, {
        label: 0,
        component: <NewTab />
      }};
    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
}

function useCount() {
  const context = useContext(CountContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  // const [count, setCount] = context; //using in with case useState;
  const [state, dispatch] = context; //using in with case useReducer;
  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  return {
    state,
    // setCount,
    dispatch,
    increment,
    decrement
  };
}

function useSelector(key) {
  const context = useContext(CountContext);
  console.log(context);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const [state] = context;
  const newState = state[key];
  return useMemo(() => state[key], [newState, key]);
}

function CountProvider(props) {
  // const [count, setCount] = useState(0); //this case using useState;
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
    user: { id: 1, name: "cuongdv" },
    language: ["english", "vietnamese"]
  }); //this case using useReducer;

  // const value = useMemo(() => [count, setCount], [count]);
  const value = useMemo(() => [state, dispatch], [state]);
  return <CountContext.Provider value={value} {...props} />;
}

export { useCount, CountProvider, useSelector };
