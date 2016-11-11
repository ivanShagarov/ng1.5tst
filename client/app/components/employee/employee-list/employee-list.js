import angular from 'angular';
import uiRouter from 'angular-ui-router';
import employeeListComponent from './employee-list.component';

let employeeListModule = angular.module('employeeList', [
  uiRouter
])

.component('employeeList', employeeListComponent)

.name;

export default employeeListModule;
