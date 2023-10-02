export default function getStudentIdsSum(listStudents) {
  const initialValue = 0; // used to append the value to the accumulator in the firs iteration
  return listStudents.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, initialValue,
  );
}
