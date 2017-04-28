/**
* ENTER RUN CONTROLLER
* @desc controls the view for entering the run.
* @param acceses the newRun that is created on load (which creates default values for the run)
*  and alters it
* @return the altered run gets submitted to the DB, and on submit the view goes back to the
* HOME view.
*/

myApp.controller('EnterRunController', ['UserService', function(UserService){
  let enterRun = this;

  enterRun.date = new Date();
  enterRun.isOpen = false;

  enterRun.defaultRun = UserService.defaultRun;
  this.runArray = UserService.runArray;
  enterRun.addRun = UserService.addRun;
  enterRun.runSubmit = UserService.runSubmit;
  enterRun.dropdownTime = UserService.dropdownTime;
  enterRun.dropdownMiles = UserService.dropdownMiles;
  enterRun.thisRun = UserService.thisRun;

}]);
