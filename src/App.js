import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState({
    coffe: 0,
    sugar: 0,
  });

  const addCoffe = () =>
    setProducts((prevState) => {
      return {
        ...prevState,
        coffe: prevState.coffe + 1,
      };
    });

  const removeCoffe = () =>
    setProducts((prevState) => {
      return {
        ...prevState,
        coffe: prevState.coffe > 0 ? prevState.coffe - 1 : 0,
      };
    });

  const addSugar = () =>
    setProducts((prevState) => {
      return {
        ...prevState,
        sugar: prevState.sugar + 1,
      };
    });

  const removeSugar = () =>
    setProducts((prevState) => {
      return {
        ...prevState,
        sugar: prevState.sugar > 0 ? prevState.sugar - 1 : 0,
      };
    });

  const save = () => {
    localStorage.setItem("coffe", products.coffe);
    localStorage.setItem("sugar", products.sugar);
  };

  const clear = () => {
    localStorage.removeItem("coffe");
    localStorage.removeItem("sugar");
    setProducts({
      coffe: 0,
      sugar: 0,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("coffe")) {
      setProducts({
        coffe: +localStorage.getItem("coffe"),
        sugar: +localStorage.getItem("sugar"),
      });
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list</h1>
        <div className="product">
          <span>{`Coffe: ${products.coffe}`}</span>
          <button onClick={addCoffe}>Add</button>
          {products.coffe > 0 && <button onClick={removeCoffe}>Remove</button>}
        </div>
        <div className="product">
          <span>{`Sugar: ${products.sugar}`}</span>
          <button onClick={addSugar}>Add</button>
          {products.sugar > 0 && <button onClick={removeSugar}>Remove</button>}
        </div>
        <div className="save">
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default App;
