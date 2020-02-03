import { ShoppingItem } from '../Models/shopping-item.model';
import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [
  {
    id: '1312342432',
    name: 'Diet Coke',
  }
];

const newState = (state, newDate) => {
  return Object.assign({}, state, newDate);
};

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      console.log(action.type, action.payload);
      return [...state, action.payload];
    case ShoppingActionTypes.DELETE_ITEM:
      console.log(action.type, action.payload);
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
