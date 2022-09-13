import React from "react";

function Attendant({ id, username, salary, job, image, handleDelete }) {
 

  function addToDeleted() {
    fetch(`https://enigmatic-coast-49713.herokuapp.com/attendants/${id}`, {
      method: "DELETE"    })
      .then((response) => response.json())
      .then((data) => handleDelete(id))

      .catch((error) => console.log(error));
  }

  return (
    <div id={id}>
      <h3>{username}</h3>
      <img src={image} alt="attendant" />
      <h3>{job}</h3>
      <p>
        <strong>Salary Ksh {salary}</strong>
      </p>

      <button onClick={addToDeleted}>
        DELETE
      </button>
    </div>
  );
}

export default Attendant;
