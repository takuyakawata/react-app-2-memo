export const StudentList = ({ students }) => {
  return (
    <ul className="student-list">
      {students.map((student, index) => (
        <li key={index}>{student.name}</li>
      ))}
    </ul>
  );
};