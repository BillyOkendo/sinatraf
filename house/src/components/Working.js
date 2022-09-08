
import AttendantsHolder  from "./AttendantsHolder";

function Working({attendants,setAttendants}) {
  return (
    <div className="cata">
      <AttendantsHolder attendants={attendants} setAttendants={setAttendants} />
    </div>
  );
}

export default Working;
