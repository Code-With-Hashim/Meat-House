import React from "react";

const Subtotal = ({ cart, Ship }) => {
  console.log(Ship);
  console.log(cart);
  const splitrs = (str) => {
    str = str.split("₹");
    return +str[1];
  };
  const total = () => {
    var final = 0;
    var sum = 0;
    cart?.forEach((el) => {
      sum += el.quantity * splitrs(el.rupee);
    });
    console.log(sum);
    return sum + Ship;
  };
  return total();
};

export default Subtotal;
