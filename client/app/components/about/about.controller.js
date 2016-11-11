class AboutController {
  constructor($state) {
    "ngInject";
    this.name = $state.$current.name;
    this.pageAboutPressCounter = 0;
  }  
  increaseAboutPressCounter() {
    this.pageAboutPressCounter++;
  }
}

export default AboutController;
