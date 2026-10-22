import type { Course } from "../models/courses";
import CourseCard from "./CourseCard";

interface CourseListProps {
  courses: Course[];
}

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div className="CourseList">
      {courses.map((course: Course) => (
        <CourseCard key={course.courseId} {...course} />
      ))}
    </div>
  );
}
