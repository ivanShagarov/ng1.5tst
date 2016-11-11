import template from './employee-list.html';
import controller from './employee-list.controller';
import './employee-list.styl';

let employeeListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default employeeListComponent;
