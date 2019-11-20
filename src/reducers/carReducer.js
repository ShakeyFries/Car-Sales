

const initialState = {
      title: "empty",
      editing: false
};

export const carReducer = (state, action )  => {
  switch (action.type) {
    case 'TOGGLE_EDITING':
      return {
        ...state,
        editing: !state.editing
      };
    case 'UPDATE_CAR':
      return {
        ...state,
        title: "nada",
        editing: !state.editing
      };
    default:
      return state;
  }
}; 

