import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import  "../data/cart-class.js";

/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

async function loadPage() {
  try {
    await loadProductsFetch();
  
    await new Promise((resolve, reject) => {
      loadCart(() => {
        // reject('error');
        resolve();
      });
    });
  } catch (error) {
    console.log('Unexpected error.');
  }

  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise(resolve => {
    loadCart(() => {
      resolve();
    });
  })

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/
