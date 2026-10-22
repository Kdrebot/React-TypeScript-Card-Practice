interface StudentCardProps {
  studentName: string;
  grade: number;
}

export default function StudentCard({ studentName, grade }: StudentCardProps) {
  return (
    <div>
      <h2>{studentName}</h2>
      <p>Grade: {grade}</p>
    </div>
  );
}
