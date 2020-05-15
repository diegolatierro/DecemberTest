var page = require('./page');

function December (webdriver) {
  page.call(this, webdriver, 'https://decemberlabs.com/');
}

December.prototype = Object.create(page.prototype);
December.prototype.constructor = December;

//Vars for home page
var get_in_touch = 'a[class="button btn_open_msg btn_start_project"]';
var name_field = 'name';
var company_field = 'company';
var message_field = 'message';
var email_field = 'email';
var send_button = 'input[class="button-primary contact-form-submit new-project-submit w-button button"]';

var get_In_Touch_message = 'span[class="row big_text"]';


var post_button = 'a[href="work/trade-pmr"]';
var post_message = 'h2[class="title_ani"]';

December.prototype.typeUserName = function(username) {
  this.waitFor({ name:  name_field});
  return this.driver.findElement({ name: name_field  }).sendKeys(username);
};
December.prototype.typeCompany = function(text) {
  this.waitFor({ id: company_field });
  return this.driver.findElement({ id: company_field  }).sendKeys(text);
};
December.prototype.typeMessage = function(text) {
  this.waitFor({ id: message_field });
  return this.driver.findElement({ id: message_field  }).sendKeys(text);
};
December.prototype.typeEmail = function(text) {
  this.waitFor({ id: email_field });
  return this.driver.findElement({ id: email_field  }).sendKeys(text);
};

December.prototype.clickSendButton = function() {
  this.waitFor({css: send_button});
  return this.driver.findElement({css: send_button}).click();
};

December.prototype.clickGetInTouchButton = function() {
  this.waitFor({css: get_in_touch});
  return this.driver.findElement({css: get_in_touch}).click();
};

December.prototype.clickOnPostButton = function() {
  this.waitFor({css: post_button});
  return this.driver.findElement({css: post_button}).click();
};

December.prototype.postValidation = function() {
  expect({css: aqaLabel}).to.exist
};

December.prototype.getInTouchValidation = function() {
  expect({css: post_message}).to.exist
};

//For test 2
December.prototype.GetInTouch = function(text,email) {
  this.waitFor({ css: get_in_touch });
  this.clickGetInTouchButton();
  this.typeUserName(text);
  this.typeCompany(text);
  this.typeMessage(text);
  this.typeEmail(email);
  this.clickSendButton();
  this.getInTouchValidation();
};

//For test 1
December.prototype.CheckPost = function() {
  this.waitFor({ css: post_button });
  this.clickOnPostButton();
  this.postValidation();
};


module.exports = DecemberPage;
