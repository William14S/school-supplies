import React from 'react';
import '../App.css';

const buySomething = () => {
    alert("you bought something")
}

function Product(props) {
  return(
    <div className="product" onClick = {(props.buy(props.type, props.price))}>
      <p>Click me to buy a {props.type}!</p>
    </div>
  );
}

export default Product;
