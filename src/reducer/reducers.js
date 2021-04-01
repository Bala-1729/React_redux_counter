export function counterReducer(state = 0, action) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "ADDCOUNTER":
        return state + 10;
      case "SUBCOUNTER":
        return state - 10;
      default:
        return state;
    }
  }
  
  export function resultsReducer(state = [], action) {
    switch (action.type) {
      case "ADDRESULTS":
        state = [...state, action.payload]
        return state;
      default:
        return state;
    }
  }
  