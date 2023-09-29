export default function createReportObject(employeesList) {
  const allEmployeesList = [];

  for (const [key, values] of Object.entries(employeesList.allEmployees)) { // eslint-disable-line
    allEmployeesList.push(...values);
  }
  return allEmployeesList;
}
