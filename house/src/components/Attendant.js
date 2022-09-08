import React from "react";

function Attendant({ id, username, salary, job, image, favorite,updateProducts }) {
 

  function addToCart() {
    fetch(`https://damp-journey-46873.herokuapp.com/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
        Accept: "Application/json",
      },
      body: JSON.stringify({ favourite: !favorite }),
    })
      .then((response) => response.json())
      .then((data) => updateProducts(data))

      .catch((error) => console.log(error));
  }

  return (
    <div id={id}>
      <h3>{username}</h3>
      <img src={image} alt="attendant" />
      <p>
        <strong>Salary Ksh {salary}</strong>
      </p>

      <button onClick={addToCart}>
        {favorite ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default Attendant;
