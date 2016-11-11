class EmployeeListController {
  constructor(EmployeeData, NavbarData) {
    "ngInject";

    this.filter = NavbarData.navbarFilter();
    this.employeeData = EmployeeData.getEmployeeData();
    this.name = 'Employee List';
  }

  deleteEmployee(employeeId) {
    let removeEmployee = this.employeeData.findIndex((employee) => {
      return employee.id === employeeId;
    });
    this.employeeData.splice(removeEmployee, 1);
  }
}

export default EmployeeListController;
