import angular from 'angular';
import uiRouter from 'angular-ui-router';
import employeeEditComponent from './employee-edit.component';

let employeeEditModule = angular.module('employeeEdit', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('Edit', {
      url: '/edit/:id/',
      component: 'employeeEdit'
    });
})

.component('employeeEdit', employeeEditComponent)

.name;

export default employeeEditModule;
