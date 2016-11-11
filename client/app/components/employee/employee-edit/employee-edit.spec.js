import EmployeeEditModule from './employee-edit'
import EmployeeEditController from './employee-edit.controller';
import EmployeeEditComponent from './employee-edit.component';
import EmployeeEditTemplate from './employee-edit.html';

describe('EmployeeEdit', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EmployeeEditModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EmployeeEditController();
    };
  }));

  describe('Module', () => {
  });

  describe('Component', () => {
      let component = EmployeeEditComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(EmployeeEditTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(EmployeeEditController);
      });
  });
});
