Scalable Angular v.1.5.8 ES6 app, based on generator.
Author Ivan Shagarov (yezzbox@gmail.com).

Install globals:
#npm i -g gulp karma karma-cli webpack

Install local dependencies:
#npm i

Run:
#gulp

Run tests:
#npm test

The source code doesn't have much comments for the purpose of writing self-docummented, TDD-style code.

App features:
      There are no watchers or two-way bingings with watchers.
      Navbar filter is implemented using two-way update through navbar model object, but not with binding and watcher (navbar.factory.js).
      The employee edit form is also implemented using two-way through employee model object (employee-data.factory.js).
      Navbar counter (about.controller.js) is implemented with optional navbar one-way binding.
      Counter is also has side-effect using ES6 setter method (navbar.controller.js).