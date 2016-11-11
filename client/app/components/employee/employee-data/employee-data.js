import angular from 'angular';
import EmployeeDataFactory from './employee-data.factory';

let employeeDataModule = angular.module('employee-data', [])

.factory('EmployeeData', EmployeeDataFactory)

.name;

export default employeeDataModule;
