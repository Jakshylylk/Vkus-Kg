import React, { createContext, useReducer } from "react";

export const cartContext = createContext();

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartCount: getProductsCart(),
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_CART":
      return { ...prevState, cart: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...prevState, cartCount: action.payload };
    default:
      return prevState;
  }
}

function getProductsCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products?.length : 0;
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! ================ ADD PRODUCT TO CART START =================
  function addProductToCart(productObj) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart === null) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: productObj,
      count: 1,
      subPrice: productObj.price,
    };
    // ! ================= ХРАНЕНИЕ ДУБЛИКАТОВ START ==================
    let filterCart = cart.products.filter(elem => {
      return elem.item.id === productObj.id;
    });
    if (filterCart.length > 0) {
      cart.products = cart.products.filter(elem => {
        return elem.item.id !== productObj.id;
      });
    } else {
      cart.products.push(newProduct);
    }
    // ? ================= ХРАНЕНИЕ ДУБЛИКАТОВ END ====================
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
  }
  // ? ================ ADD PRODUCT TO CART END ===================

  // ! ================ READ CART START =======================
  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }
  // ? ================ READ CART END =========================

  // ! ================ CHANGE PRODUCT COUNT START ============
  function changeProductCount(id, count) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map(elem => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = count * elem.item.price;
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }
  // ? ================ CHANGE PRODUCT COUNT END ==============

  function calcTotalPrice(products) {
    let total = 0;
    products.map(item => {
      total += item.subPrice;
    });
    return total;
  }

  // ! ================= DELETE PRODUCT IN CART START ===========
  function deleteProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter(elem => {
      return elem.item.id !== id;
    });
    cart.totalPrice = calcTotalPrice(cart.products);

    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }
  // ? ================= DELETE PRODUCT IN CART END =============
  const cartCloud = {
    addProductToCart,
    getCart,
    changeProductCount,
    deleteProductInCart,

    productInCart: state.cart,
    cartCount: state.cartCount,
  };
  return (
    <cartContext.Provider value={cartCloud}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;
