import type { Course } from "../models/courses";

export default function CourseCard({ courseName, credits }: Course) {
  return (
    <div className="courseCard">
      <h3>{courseName}</h3>
      <p>Credits: {credits.toFixed(2)}</p>
    </div>
  );
}
