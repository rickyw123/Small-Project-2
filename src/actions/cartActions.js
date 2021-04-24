import ProductData from './../Data/product.json';

export const addItemToCart = (id, size) => (dispatch, getState) => {
  const product = ProductData.find(data => data.id === id);
  dispatch({
    type: 'ADD_TO_CART',
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      size: size,
      qty: 1
    }
  });
  localStorage.setItem('cart_item', JSON.stringify(getState().cart.cart));
  // localStorage.setItem -> menset data pada local storage pada browser
  // getState() : ambil semua state yang ada pada reducer yang ada pada initialState di store.js
}

export const removeItem = (id) => (dispatch, getState) => {
  // getState dalam parameter : panggil getState biar bisa dipakai di getState()
  dispatch({
    type: 'REMOVE_ITEM_FROM_CART',
    payload: id
  })
  localStorage.setItem('cart_item', JSON.stringify(getState().cart.cart));
}

export const updateItem = (id, qty, size) => (dispatch, getState) => {
  const product = ProductData.find(data => data.id === id);
  dispatch({
    type: 'UPDATE_ITEM_CART',
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      size: size,
      qty: qty
    }
  })
  localStorage.setItem('cart_item', JSON.stringify(getState().cart.cart));
}