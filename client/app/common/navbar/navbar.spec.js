import NavbarModule from './navbar'

describe('Navbar', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(NavbarModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
  });

  describe('Controller', () => {
    let controller;
    beforeEach(() => {
      controller = $componentController('navbar', {
        $scope: $rootScope.$new()
      });
    });

  });

  describe('View', () => {
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<navbar></navbar>')(scope);
      scope.$apply();
    });

  });
});
