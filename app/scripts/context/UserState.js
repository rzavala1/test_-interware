import React, { useReducer } from 'react';
import UserContext from './UserContext';
import UserReducer from "./UserReducer";

const UserState = (props) => {
  const initialState = {
    results_search: [],
  }

  const [globalState, dispatch] = useReducer(UserReducer, initialState);

  const setResults = async (state) => {
    try {
      dispatch({
        type: "RESULTS_SEARCH",
        payload: state,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        results: globalState.results,
        setResults
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
export default UserState