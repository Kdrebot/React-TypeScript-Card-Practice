import { useState } from "react";

export default function StudentGrade() {
  const [student, setStudent] = useState({
    studentName: "Alex",
    grade: 85,
  });

  return (
    <div>
      <p>{student.studentName}</p>
      <button onClick={() => setStudent({ ...student, grade: 90 })}>
        Change Grade to 90
      </button>
      <br />
      <button
        onClick={() =>
          setStudent((previous) => ({ ...previous, grade: previous.grade + 5 }))
        }
      >
        Add 5 to Grade
      </button>
      <p>{student.grade}</p>
      <button
        onClick={() =>
          setStudent((previous) => ({ ...previous, grade: previous.grade - 5 }))
        }
      >
        Remove 5 From Grade
      </button>
    </div>
  );
}
