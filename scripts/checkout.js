import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import  "../data/cart-class.js";

/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

Promise.all([
  new Promise(resolve => {
    loadProducts(() => {
      resolve();
    });
  }),
  new Promise(resolve => {
    loadCart(() => {
      resolve();
    });
  })

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
