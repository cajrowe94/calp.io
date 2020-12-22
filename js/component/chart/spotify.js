/**
 * Charts for my spotify data
 */
component.chart.spotify = function(series){
  component.apply(this, arguments);

  if (series) {
    this.series_ = series;
  }
};
$.inherits(component.chart.spotify, component.chart);

component.chart.spotify.prototype.get_options_xAxis = function() {
  return {
    'type': 'datetime',
    'lineColor': '#C5C6C7',
    'lineWidth': 0.5,
    'crosshair': {
      'color': '#C5C6C7',
      'width': 0.5,
      'dashStyle': 'dash',
    },
  };
};

component.chart.spotify.prototype.get_options_yAxis = function() {
  return {
    'gridLineWidth': 0.3,
    'gridLineColor': '#C5C6C7',
    'title': {
      'text': 'Minutes',
    },
  };
};

component.chart.spotify.prototype.get_chart_type = function() {
  return 'spline';
};
