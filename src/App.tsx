import "./App.css";
import CourseList from "./Components/CourseList";
import type { Course } from "./models/courses";
import StudentCard from "./Components/StudentCard";
import Counter from "./Components/Counter";
import ScoreCounter from "./Components/ScoreCounter";
import StudentGrade from "./Components/StudentGrade";

const courses: Course[] = [
  {
    courseId: 1,
    courseName: "John Course",
    credits: 25,
  },
  {
    courseId: 2,
    courseName: "Zach Course",
    credits: 90000,
  },
];

const students = [
  { studentId: 1, studentName: "Alex", grade: 85 },
  { studentId: 2, studentName: "Jamie", grade: 92 },
];

function App() {
  return (
    <>
      <CourseList courses={courses} />
      <StudentCard studentName="Bob" grade={85} />
      {students.map((student) => (
        <StudentCard
          key={student.studentId}
          studentName={student.studentName}
          grade={student.grade}
        />
      ))}
      <Counter />
      <br />
      <ScoreCounter />
      <br />
      <StudentGrade />
    </>
  );
}

export default App;
