/**
 * Highcharts wrapper
 */
component.chart = function(args){
  component.apply(this, arguments);

  if (args.series) {
    this.series_ = args.series;
  }
};
$.inherits(component.chart, component);

component.chart.prototype.decorate = function(parent) {
  var self = this;

  // set the default options for our charts
  var default_options = {};

  default_options.chart = this.get_options_chart();
  default_options.title = this.get_options_title();
  default_options.credits = this.get_options_credits();
  default_options.series = this.get_options_series();
  default_options.chart.renderTo = parent;

  this.chart_ = Highcharts.chart(default_options);

  setTimeout(function() {
    self.chart_.reflow();
  }, 0);
};

component.chart.prototype.get_chart = function() {
  return this.chart_;
};

/**
 * https://api.highcharts.com/highcharts/chart
 */
component.chart.prototype.get_options_chart = function() {
  return {
    'backgroundColor': 'transparent',
    'height': '500px',
  };
};

/**
 * https://api.highcharts.com/highcharts/title
 */
component.chart.prototype.get_options_title = function() {
  return {
    'text': null,
  };
};

/**
 * https://api.highcharts.com/highcharts/credits
 */
component.chart.prototype.get_options_credits = function() {
  return {
    'enabled': false,
  };
};

/**
 * https://api.highcharts.com/highcharts/series
 */
component.chart.prototype.get_options_series = function() {
  return this.get_series();
};

/**
 * Return the series array
 */
component.chart.prototype.get_series = function() {
  return this.series_;
};

/**
 * Manipulate/Set the series array of this chart
 */
component.chart.prototype.set_series = function(series) {
  this.series_ = series;
};
