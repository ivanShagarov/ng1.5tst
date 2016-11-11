class HomeController {
  constructor($state) {
    "ngInject";
    this.name = $state.$current.name;
  }
}

export default HomeController;
