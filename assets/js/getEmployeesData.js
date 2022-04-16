import { makeEmployeeAvatar } from './avatar.js';

const getEmployeesData = async () => {
    const data = await fetch("/employee/all", {
        method: "GET"
    });
    const { employeesData } = await data.json();

    if (employeesData) {
        employeesData.forEach(employee => {
            makeEmployeeAvatar(employee.employeeName);
        });
    }
}
window.addEventListener("DOMContentLoaded", getEmployeesData);
