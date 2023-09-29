export default function createReportObject(employeesList) {
    const allEmployeesList = [];
    for(const [key, values] of Object.entries(employeesList.allEmployees)) {
        allEmployeesList.push(...values);
    }
    return allEmployeesList;
}