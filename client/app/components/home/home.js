import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Employee from '../employee/employee';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter,
  Employee
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('Home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)
  
.name;

export default homeModule;
