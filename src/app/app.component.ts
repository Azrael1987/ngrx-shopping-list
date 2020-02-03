import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/shopping-item.model';
import { AddItemAction, DeleteItemAction } from './store/actions/shopping.actions';
import { stringify } from 'querystring';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shoppingItems$: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };
  product: string;
  constructor(private store: Store<AppState>) { }
  title = 'ngrx-shopping-list';

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping);

    setTimeout(() => this.addItemLeter(), 2000);
  }

  addItemLeter() {
    this.store.dispatch(new AddItemAction({ id: '34234', name: 'milk' }));
  }

  addItem() {
    this.store.dispatch(new AddItemAction({ id: this.getUniqueIndex(), name: this.product }));
  }

  addItem2() {
    this.newShoppingItem.id = uuid();
    // this.newShoppingItem.neme =
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = { id: '', name: '' };
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }

  getUniqueIndex(): string {
    const time = new Date();
    return time.toString() + time.getUTCMilliseconds();
    // 'id'.concat('text');
  }
  // 19-54
}

