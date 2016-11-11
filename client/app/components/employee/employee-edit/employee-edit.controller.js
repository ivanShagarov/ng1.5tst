class EmployeeEditController {
  constructor($state, $stateParams, EmployeeData) {
    "ngInject";
    this.state = $state;
    this.name = 'Edit Employee';
    this.employeeList = EmployeeData.getEmployeeData();
    this.currentEmployee = this.getCurrentEmployee($stateParams.id);
  }

  getCurrentEmployee(employeeId) {
    employeeId = employeeId === '' ? null : +employeeId; 
    let foundEmployee = this.employeeList.find((employee) => {
      return employee.id === employeeId;
    });
    return foundEmployee || this.getNewEmployee();
  }

  getNewEmployee() {
    let maxId = this.employeeList.reduce((prev, cur) => {
          return prev.id > cur.id ? prev.id : cur.id;
        });
    let newEmployee = {
        id: maxId + 1,
        name: '',
        surname: '',
        experience: null,
        age: null,
        address: ''
    };
    this.employeeList.push(newEmployee);
    return newEmployee;
  }

  saveEmployee() {
    this.employeeList = this.employeeList.map((employee) => {
      if (employee.id === this.currentEmployee.id) {
        employee = this.currentEmployee;
      }
      return employee;
    });
    this.state.go('Home');
  }

}

export default EmployeeEditController;
