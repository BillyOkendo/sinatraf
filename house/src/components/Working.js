
import AttendantsHolder  from "./AttendantsHolder";

function Catalogue({attendants,setAttendants}) {
  return (
    <div className="cata">
      <AttendantsHolder attendants={attendants} setAttendants={setAttendants} />
    </div>
  );
}

export default Catalogue;
