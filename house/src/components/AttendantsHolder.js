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
        name={attendant.username}
        content={attendant.job}
        price={attendant.salary}
        image={attendant.image}
        updateAttendants={updateAttendants}
      />
    );
  });

  return (
    <div className="products-container">
      <select className="select-bar" onChange={handleSelect} value={selectedOption}>
        <option value="All">Attendants</option>
      </select>

      {showAttendants}
    </div>
  );
}

export default AttendantsHolder;
