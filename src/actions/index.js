export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE"; 

export const removeFeature = remove => {
  return {
    type: REMOVE_FEATURE,
    payload: remove
  };
};

export const addFeature = add => {
  return {
    type: ADD_FEATURE,
    payload: add
  };
};

