const initialState = {
items: {} // { plantId: { ...plantData, quantity: n } }
};

export default function cartReducer(state = initialState, action) {
switch (action.type) {
case "ADD_TO_CART": {
const plant = action.payload;
if (state.items[plant.id]) return state; // already added disables button

return {  
    ...state,  
    items: {  
      ...state.items,  
      [plant.id]: { ...plant, quantity: 1 },  
    },  
  };  
}  
case "INCREMENT_QUANTITY": {  
  const id = action.payload;  
  if (!state.items[id]) return state;  

  return {  
    ...state,  
    items: {  
      ...state.items,  
      [id]: { ...state.items[id], quantity: state.items[id].quantity + 1 },  
    },  
  };  
}  
case "DECREMENT_QUANTITY": {  
  const id = action.payload;  
  if (!state.items[id]) return state;  

  const currentQty = state.items[id].quantity;  
  if (currentQty <= 1) return state; // minimum 1, no removal here  

  return {  
    ...state,  
    items: {  
      ...state.items,  
      [id]: { ...state.items[id], quantity: currentQty - 1 },  
    },  
  };  
}  
case "DELETE_ITEM": {  
  const id = action.payload;  
  if (!state.items[id]) return state;  

  const newItems = { ...state.items };  
  delete newItems[id];  

  return {  
    ...state,  
    items: newItems,  
  };  
}  
case "CLEAR_CART": {  
  return initialState;  
}  
default:  
  return state;

}
    }
