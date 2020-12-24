/**
 * Charts for my spotify data
 */
component.chart.spotify = function(args){
  component.apply(this, arguments);

  if (args.series) {
    this.series_ = args.series;
  }

  if (args.interval) {
    this.interval_ = args.interval;
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
    'labels': {
      'rotation': -45,
    },
  };
};

component.chart.spotify.prototype.get_options_yAxis = function() {
  return {
    'gridLineWidth': 0.3,
    'gridLineColor': 'rgba(197, 198, 199, 0.5)',
    'title': {
      'text': 'Minutes streamed',
    },
  };
};

component.chart.spotify.prototype.get_chart_type = function() {
  return 'spline';
};

component.chart.spotify.prototype.get_options_tooltip_formatter = function() {
  var self = this;

  var format_time = function(minutes) {
    var data = {};

    data.hours = Math.floor(minutes / 60);
    data.minutes = (minutes % 60);

    return data;
  };

  var get_date_format = function() {
    var format = '';

    switch (self.interval_) {
      case 'daily':
        format = '%A, %b %e';
        break;
      case 'monthly':
        format = '%B %Y';
        break;
      default:
        format = '';
    }

    return format;
  };

  return function() {
    return this.points.reduce(function(s, point) {
      var time_data = format_time(point.y);

      return s +
        '<tr><td style="white-space: nowrap; font-size: 12px; color: #C5C6C7;">' +
          '<div style="display: inline-block; border-left: 2px solid ' + point.series.color +
            '; width: 10px; height: 10px;">' +
          '</div>' +
          point.series.name +
        ' </td>' +
        '<td style="padding: 2px 0px 5px 20px; white-space: nowrap; text-align: right; font-size: 12px; color: #C5C6C7;">' +
          (time_data.hours ? (time_data.hours + 'h ') : '') + time_data.minutes + 'm' +
        '</td></tr>';
    }, '<span style="font-size: 16px;">' +
          Highcharts.dateFormat(get_date_format(), this.x) +
        '</span><table>');
  };
};
