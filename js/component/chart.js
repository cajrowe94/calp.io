/**
 * Highcharts wrapper
 */
component.chart = function(series){
  component.apply(this, arguments);
};
$.inherits(component.chart, component);

component.chart.prototype.decorate = function(parent) {
  var self = this;

  // set the default options for our charts
  var default_options = {};

  default_options.chart = this.get_options_chart();
  default_options.title = this.get_options_title();
  default_options.credits = this.get_options_credits();
  default_options.plotOptions = this.get_options_plotOptions();
  default_options.series = this.get_options_series();
  default_options.xAxis = this.get_options_xAxis();
  default_options.yAxis = this.get_options_yAxis();
  default_options.tooltip = this.get_options_tooltip();
  default_options.time = this.get_options_time();
  default_options.legend = this.get_options_legend();
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
    'type': this.get_chart_type(),
    'spacing': this.get_options_spacing(),
    'zoomType': 'x',
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
 * https://api.highcharts.com/highcharts/plotOptions
 */
component.chart.prototype.get_options_plotOptions = function() {
  return {
    'area': {
      'fillOpacity': 0.15,
    },
    'series': {
      'lineWidth': 1,
      'marker': {
        'radius': 0,
        'symbol': 'circle',
      },
      'tooltip': {
        // 'pointFormatter': this.get_options_plotOptions_pointFormatter(),
      },
      'states': {
        'hover': {
          'lineWidth': 1,
        },
        'inactive': {
          'enabled': false,
        },
      },
    },
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
  return this.series_;
};

/**
 * https://api.highcharts.com/highcharts/xAxis
 */
component.chart.prototype.get_options_xAxis = function() {
  return {
    'lineColor': '#C5C6C7',
    'lineWidth': 0.3,
    'crosshair': {
      'color': '#C5C6C7',
      'width': 0.5,
      'dashStyle': 'dash',
    },
  };
};

/**
 * https://api.highcharts.com/highcharts/yAxis
 */
component.chart.prototype.get_options_yAxis = function() {
  return {
    'gridLineWidth': 0.3,
    'gridLineColor': 'rgba(197, 198, 199)',
  };
};

/**
 * https://api.highcharts.com/highcharts/time
 */
component.chart.prototype.get_options_time = function() {
  return {
    'useUTC': false,
  };
};

/**
 * Customize the type of chart
 */
component.chart.prototype.get_chart_type = function() {
  return 'line';
};

/**
 * https://api.highcharts.com/highcharts/tooltip
 */
component.chart.prototype.get_options_tooltip = function() {
  return {
    'followPointer': true,
    'distance': 70,
    'hideDelay': 0,
    'shared': true,
    'useHTML': true,
    'backgroundColor': css.color('background_secondary'),
    'borderRadius': 7,
    'borderWidth': 0,
    'padding': 10,
    'formatter': this.get_options_tooltip_formatter(),
  };
};

/**
 * https://api.highcharts.com/highcharts/tooltip.formatter
 */
// https://api.highcharts.com/highcharts/xAxis.dateTimeLabelFormats
// https://api.highcharts.com/highcharts/tooltip.dateTimeLabelFormats.day
// https://stackoverflow.com/questions/7101464/how-to-get-highcharts-dates-in-the-x-axis
// f u highcharts documentation, took me forever to find this
/*
%a: Short weekday, like 'Mon'.
%A: Long weekday, like 'Monday'.
%d: Two digit day of the month, 01 to 31.
%e: Day of the month, 1 through 31.
%b: Short month, like 'Jan'.
%B: Long month, like 'January'.
%m: Two digit month number, 01 through 12.
%y: Two digits year, like 09 for 2009.
%Y: Four digits year, like 2009.
%H: Two digits hours in 24h format, 00 through 23.
%I: Two digits hours in 12h format, 00 through 11.
%l (Lower case L): Hours in 12h format, 1 through 11.
%M: Two digits minutes, 00 through 59.
%p: Upper case AM or PM.
%P: Lower case AM or PM.
%S: Two digits seconds, 00 through 59
 */
component.chart.prototype.get_options_tooltip_formatter = function() {
  return null;
};

/**
 * https://api.highcharts.com/highcharts/plotOptions.series.tooltip
 */
component.chart.prototype.get_options_plotOptions_pointFormatter = function() {
  var convert_to_minutes = function(seconds) {
    var data = {};
    var time = (seconds / 60).toFixed(2);

    data.hours = Math.floor(time);
    data.minutes = (seconds % 60);

    return data;
  };

  return function() {
    var time_data = convert_to_minutes(this.y);

    return '<span style="font-size: 12px; color: #C5C6C7; margin-top: 20px;">' +
      time_data.hours + 'h ' + time_data.minutes + 'm' +
    '</span>';
  };
};

/**
 * https://api.highcharts.com/highcharts/legend
 */
component.chart.prototype.get_options_legend = function() {
  return {
    'itemStyle': {
      'color': '#C5C6C7',
      'fontWeight': null,
    },
    'itemHoverStyle': {
      'color': '#f7f7f7',
    },
    'itemHiddenStyle': {
      'color': '#333b45',
    },
    'padding': 20,
  };
};

/**
 * https://api.highcharts.com/highcharts/chart.spacing
 */
component.chart.prototype.get_options_spacing = function() {
  return [20, 10, 0, 0];
};
