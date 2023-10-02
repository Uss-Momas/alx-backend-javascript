/*
 * listStudents - array of students objects [{id: 0, firstName: '', location: '', grade: 0}]
 * city - the target location
 * newGrades - array of grade objects, format: [{ studentId: 31, grade: 78, }, ]
*/
export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const targetStudents = listStudents.filter((student) => student.location === city);
  return targetStudents.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    student.grade = grade === undefined ? 'N/A' : grade.grade;//eslint-disable-line
    return student;
  });
}
