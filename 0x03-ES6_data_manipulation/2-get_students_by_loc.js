export default function getStudentsByLocation(listStudents, city) {
  // filtering the student by it's location
  return listStudents.filter((student) => student.location === city);
}
