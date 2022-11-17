import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router";

export const productContext = createContext();

const API = "http://localhost:8000/porducts";

// ! ================ FUNCTION REDUC START ===================
const INIT_STATE = {
  products: null,
  productDetails: null,
  pageTotalCount: 1,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...prevState,
        product: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 5),
      };
    case "GET_ONE_PRODUCT":
      return { ...prevState, productDetails: action.payload };
    default:
      return prevState;
  }
}
// ? ================ FUNCTION REDUC END =====================

const PorductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const location = useLocation();

  // ! ================= CREATE START ===================
  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      return console.log(error);
    }
  }
  // ? ================= CREATE END =====================

  // todo ***************************************************************

  // ! ======================= READ START ===============
  async function readProduct() {
    try {
      const res = await axios(`${API}${location.search}`);
      dispatch({
        type: "GET_PRODUCT",
        payload: res,
      });
    } catch (error) {
      return console.log(error);
    }
  }
  // ? ======================= READ END =================

  // todo ***************************************************************

  // ! ================ PRODUCT DETAILS START ===========
  async function readOneProduct(id) {
    try {
      const { data } = await axios(`${API}/${id}`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: data,
      });
    } catch (error) {
      return console.log(error);
    }
  }
  // ? ================ PRODUCT DETAILS END =============

  // todo ***************************************************************

  // ! ======================= DELETE START =============
  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readProduct();
      navigate("/list");
    } catch (error) {
      return console.log(error);
    }
  }
  // ? ======================= DELETE END ===============

  // todo ***************************************************************

  // ! ======================= EDIT START ===============
  async function editProduct(id, editNewProduct) {
    try {
      await axios.patch(`${API}/${id}`, editNewProduct);
      readProduct();
    } catch (error) {
      return console.log(error);
    }
  }
  // ? ======================= EDIT END =================

  // todo ***************************************************************

  // ! ======================= CLOUD START ==============
  const productCloud = {
    addProduct,
    readProduct,
    readOneProduct,
    deleteProduct,
    editProduct,

    productsArr: state.product,
    productDetails: state.productDetails,
    pageTotalCount: state.pageTotalCount,
  };
  // ? ======================= CLOUD END ================

  return (
    <productContext.Provider value={productCloud}>
      {children}
    </productContext.Provider>
  );
};

export default PorductContextProvider;
