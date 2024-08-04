function Cart(localStorageKey) {
  const cart = {
    items: undefined,
  
    loadFromStorage() {
      this.items = JSON.parse(localStorage.getItem(localStorageKey));
      if (!this.items) {
        this.items = [{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
        }, {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId: '2'
        }];
      }
    },
  
    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.items));
    },
  
    addToCart(productId) {
      let matchingItem = '';
      this.items.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
          return;
        }
      });
  
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        this.items.push({
          productId: productId,
          quantity: 1,
          deliveryOptionId: '1'
        });
      }
  
      this.saveToStorage();
    },
  
    removeFromCart(productId) {
      const newCart = [];
      this.items.forEach((cartItem) => {
        if (productId !== cartItem.productId) {
          newCart.push(cartItem)
        }
      });
      this.items = newCart;
  
      this.saveToStorage();
    },
  
    updateDeliveryOption(productId, deliveryOptionId) {
      let matchingItem = '';
      this.items.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
          return;
        }
      });
  
      matchingItem.deliveryOptionId = deliveryOptionId;
  
      this.saveToStorage();
    }
  }
  
  return cart;
}

const cart = Cart('cart-oop');
const bussinessCart = Cart('cart-bussiness');

cart.loadFromStorage();
bussinessCart.loadFromStorage();

console.log(cart);
console.log(bussinessCart);
