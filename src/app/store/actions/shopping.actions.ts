import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item Suucess',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEMFAILURE = '[SHOPPING] Add Item Failure',
  DELETE_ITEM = '[SHOPPING] Delete Item Delete',
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) {  }
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM;

//  constructor(public payload: ShoppingItem) {  }
}

export type ShoppingAction = AddItemAction | DeleteItemAction;
