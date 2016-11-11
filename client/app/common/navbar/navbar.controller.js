class NavbarController {
  constructor(NavbarData) {
    "ngInject";
    this.filter = NavbarData.navbarFilter();
    this.sideEffectValue = 100;
  }
  get aboutPressCounter() { 
    return this.$value; 
  }
  set aboutPressCounter(value) {
    this.$value = value; 
    this.increaseSideEffectValue();  
  }
  increaseSideEffectValue() {
    this.sideEffectValue++;
  }
}

export default NavbarController;
