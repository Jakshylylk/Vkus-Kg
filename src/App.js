import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import AuthContextProvider from "./Context/AuthContextProvider";
import CartContextProvider from "./Context/CartContextProvider";
import PorductContextProvider from "./Context/PorductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <CartContextProvider>
          <PorductContextProvider>
            <NavBar />
            <MainRoutes />
            <Footer />
          </PorductContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
