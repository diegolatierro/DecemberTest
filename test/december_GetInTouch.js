var test = require('selenium-webdriver/testing'),
  expect = require('chai').expect,
  December = require('./page-objects/december-page');

test.describe('GetInTouch', function() {

  var driver;

  this.timeout(15000);

  test.before(function(done) {
    driver = require('./driver').getDriver();
    done();
  });

  test.after(function(done) {
    if(driver)
      driver.quit();
    done();
  });

  test.it('complete the form', function() {
    this.timeout(50000);//login too slow
    var decemberGetInTouch = new December(driver);
    //step 1: open https://decemberlabs.com/'
    decemberGetInTouch.open();
    //step 2: Complete and send the form
    decemberGetInTouch.GetInTouch('test','test@decemberlabs.com');
  });
});
