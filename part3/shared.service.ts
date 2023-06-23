import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  addToCart(item: any) {
    const cartItems = this.cartItemsSubject.getValue();
    cartItems.push(item);
    this.cartItemsSubject.next(cartItems);
  }

  getCartItems() {
    return this.cartItemsSubject.getValue();
  }
}
