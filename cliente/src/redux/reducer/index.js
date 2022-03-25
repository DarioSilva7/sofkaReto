const initialState = {
    questions: [],
    categories:[]
  };
  
  //primero el estado, dsps la accion.
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
          return {
            ...state,
            categories: action.payload,
          };
          default: return state
  } 
}

export default rootReducer