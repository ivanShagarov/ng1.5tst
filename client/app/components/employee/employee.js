import angular from 'angular';
import EmployeeData from './employee-data/employee-data';
import EmployeeList from './employee-list/employee-list';
import EmployeeEdit from './employee-edit/employee-edit';

let employeeModule = angular.module('employee', [
  EmployeeData,
  EmployeeList,
  EmployeeEdit
])
  
.name;

export default employeeModule;
