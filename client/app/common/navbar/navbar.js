import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';
import NavbarDataFactory from './navbar.factory';

let navbarModule = angular.module('navbar', [
  uiRouter
])

.factory('NavbarData', NavbarDataFactory)

.component('navbar', navbarComponent)
  
.name;

export default navbarModule;
