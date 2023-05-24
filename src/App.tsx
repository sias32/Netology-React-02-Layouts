import React from "react";
import "./assets/App.css";
import Store from "./components/Store";
import products from "./assets/prodicts";

const App: React.FC = () => {
  return (
    <>
      <Store products={products} />
    </>
  );
};

export default App;
