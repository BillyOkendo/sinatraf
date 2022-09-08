// import attendant from "./Attendant";
import { useState } from "react";
import Attendant from "./Attendant";

function AttendantsHolder({ attendants, setAttendants }) {
  const [selectedOption, setSelectedOption] = useState("All");

  function handleSelect(e) {
    setSelectedOption(e.target.value);
  }

  function updateAttendants(data) {
    const updatedAttendants = attendants.map((attendant) => {
      if (attendant.id === data.id) {
        return data;
      }
      return attendant;
    });
    setAttendants(updatedAttendants);
  }

  function handleDelete(id) {

    const deleted =  attendants.filter((attendant) =>{
          return attendant.id !== id
      })
      setAttendants(deleted)
    }
  

  const filteredAttendants = attendants.filter((attendant) => {
    if (selectedOption === "All") {
      return attendant;
    }
    
  });

  

  const showAttendants = filteredAttendants.map((attendant) => {
    return (
      <Attendant
        key={attendant.id}
        id={attendant.id}
        username={attendant.username}
        job={attendant.job}
        salary={attendant.salary}
        image={attendant.image}
        updateAttendants={updateAttendants}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <div className="products-container">
      <select className="select-bar" onChange={handleSelect} value={selectedOption}>
        <option>Attendants</option>
      </select>

      {showAttendants}
    </div>
  );
}

export default AttendantsHolder;
