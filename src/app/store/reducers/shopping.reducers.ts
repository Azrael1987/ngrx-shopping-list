import { ShoppingItem } from '../Models/shopping-item.model';
import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [
  {
    id: '1312342432',
    name: 'Diet Coke',
  }
];

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    // case ShoppingActionTypes.DELETE_ITEM:
    //   return [...state,]
    default:
      return state;
  }
}
