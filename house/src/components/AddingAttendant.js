import { useState } from "react";

function AddingAttendant({ updateAttendants }) {
  const [newData, setNewData] = useState({
    username: "",
    image: "",
    job: ""
  });

  function onSubmission(e) {
    e.preventDefault();
    if (
      newData.username === "" ||
      newData.image === "" ||
      newData.job === "" ||
      newData.salary === ""
    ) {
      alert("Please input all fields");
    } else {
      fetch("https://enigmatic-coast-49713.herokuapp.com/attendants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((response) => response.json())
        .then((data) => {
          updateAttendants(data);
          setNewData({ ...newData, username: "", job: "", image: "",salary:"" });
        });
    }
  }

  function doChange(e) {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  }

  return (
    <div className="sidebar">
    <form className="adding-attendant-form" onSubmit={onSubmission}>
      <input
        value={newData.username}
        name="username"
        placeholder="username"
        onChange={doChange}
      />
      <input
        value={newData.job}
        name="job"
        placeholder="job"
        onChange={doChange}
      />
      <input
        value={newData.image}
        name="image"
        placeholder="image"
        onChange={doChange}
      />
      <input
        value={newData.salary}
        name="salary"
        placeholder="Salary"
        onChange={doChange}
      />
      
      <input type="submit" value="Add Attendant" />
    </form>
    </div>
  );
}

export default AddingAttendant;
