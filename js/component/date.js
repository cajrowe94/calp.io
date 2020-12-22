/**
 * Date component for making dates less frustrating
 * Contains a nice variety of helper functions
 * Enjoy! :D
 */
component.date = function(datetime){
  component.apply(this, arguments);
  this.init_(datetime);
};
$.inherits(component.date, component);

/**
 * Parse the string date
 * Try and get a datetime out of it
 */
component.date.prototype.init_ = function(datetime) {
  if (datetime) {
    this.date_ = new Date(datetime);
  } else {
    this.date_ = new Date();
  }
};

component.date.prototype.get_date = function(datetime) {
  return this.date_;
};

component.date.prototype.set_date = function(datetime) {
  this.date_ = new Date(datetime);
};

/**
 * Date helpers
 */

component.date.prototype.get_year = function() {
  return this.date_.getFullYear();
};

component.date.prototype.get_month = function() {
  return this.date_.getMonth() + 1;
};

component.date.prototype.get_day_of_month = function() {
  return this.date_.getDate();
};

component.date.prototype.get_day_of_week = function() {
  return this.date_.getDay();
};

component.date.prototype.set_year = function(year) {
  this.date_.setFullYear(year);
};

component.date.prototype.set_month = function(month) {
  this.date_.setMonth(month - 1);
};

component.date.prototype.set_day_of_month = function(day_of_month) {
  this.date_.setDate(day_of_month);
};


/**
 * Time helpers
 */

component.date.prototype.get_hours = function() {
  return this.date_.getHours();
};

component.date.prototype.get_minutes = function() {
  return this.date_.getMinutes();
};

component.date.prototype.get_seconds = function() {
  return this.date_.getSeconds();
};

component.date.prototype.set_hours = function(hours) {
  this.date_.setHours(hours);
};

component.date.prototype.set_minutes = function(minutes) {
  this.date_.setMinutes(minutes);
};

component.date.prototype.set_seconds = function(seconds) {
  this.date_.setSeconds(seconds);
};

component.date.prototype.zero_time = function(seconds) {
  this.set_hours(0);
  this.set_minutes(0);
  this.set_seconds(0);
};

/**
 * Returns the date since Jan 1, 1970 in milliseconds
 */
component.date.prototype.get_date_ms = function() {
  return this.date_.getTime();
};

