import EmployeeListModule from './employee-list'
import EmployeeListController from './employee-list.controller';
import EmployeeListComponent from './employee-list.component';
import EmployeeListTemplate from './employee-list.html';

describe('EmployeeList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EmployeeListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EmployeeListController();
    };
  }));

  describe('Module', () => {
  });

  describe('Component', () => {
      let component = EmployeeListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(EmployeeListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(EmployeeListController);
      });
  });
});
