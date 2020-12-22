layer.spotify = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.spotify, layer);

layer.spotify.prototype.get_title = function(parent) {
  return '2020 Spotify stream data';
};

layer.spotify.prototype.decorate = function(parent) {
  this.decorate_top_five_artists(parent);
};

layer.spotify.prototype.decorate_top_five_artists = function(parent) {
  var paper = new component.paper({
    'title': 'Top 3 artists',
  });

  var container = paper.get_container();

  css.apply(container, {
    'height': '575px',
  });

  if (
    this.loading === false ||
    window.data.spotify
  ) {
    var series_data = this.get_top_five_series();
    new component.chart.spotify(series_data.series).render(container);
  } else {
    // loader
    new component.loading_overlay().render(container);
    // get the data
    this.loading = true;
    this.get_spotify_data();
  }

  paper.render(parent);
};

layer.spotify.prototype.get_spotify_data = function() {
  var self = this;

  api(
    'spotify',
    'read_streams',
    {},
    function(data) {
      self.loading = false;
      window.data.spotify = data;
      self.render();
    }
  );
};

layer.spotify.prototype.get_top_five_series = function() {
  var return_data = {};
  var streams_data = $.isArray(window.data.spotify) ? window.data.spotify : [];

  // all artists streamed
  var artists = [];
  // streams indexed by artistName
  var streams = {};

  // top 5 artists
  var top_five = [
    {
      'artist': '',
      'total_seconds': 0,
    },
    {
      'artist': '',
      'total_seconds': 0,
    },
    {
      'artist': '',
      'total_seconds': 0,
    },
    // {
    //   'artist': '',
    //   'total_seconds': 0,
    // },
    // {
    //   'artist': '',
    //   'total_seconds': 0,
    // },
  ];

  streams_data.forEach(function(stream) {
    // check for new artist
    if ($.indexOf(artists, stream.artistName) < 0) {
      artists.push(stream.artistName);

      streams[stream.artistName] = {
        'artist': stream.artistName,
        'streams': [],
        'total_seconds': 0,
      };
    }

    streams[stream.artistName].streams.push(stream);
    streams[stream.artistName].total_seconds += Math.floor(stream.msPlayed * 0.001);
  });

  // get the top five totals

  var shift_sequence = function(from, stream_) {
    top_five.splice(from, 0, {
      'artist': stream_.artist,
      'total_seconds': stream_.total_seconds,
    });
    top_five.pop();
  };

  $.keys(streams).forEach(function(artist) {
    if (streams[artist].total_seconds > top_five[0].total_seconds) {
      shift_sequence(0, streams[artist]);
    } else if (streams[artist].total_seconds > top_five[1].total_seconds) {
      shift_sequence(1, streams[artist]);
    } else if (streams[artist].total_seconds > top_five[2].total_seconds) {
      shift_sequence(2, streams[artist]);
    }
    // } else if (streams[artist].total_seconds > top_five[3].total_seconds) {
    //   shift_sequence(3, streams[artist]);
    // } else if (streams[artist].total_seconds > top_five[4].total_seconds) {
    //   top_five[4].artist = streams[artist].artist;
    //   top_five[4].total_seconds = streams[artist].total_seconds;
    // }
  });

  return_data.top_five_total = top_five;

  var series = [];

  // build out the monthly series for top five

  var colors = [
    'rgba(66, 135, 245)',
    'rgba(66, 245, 188)',
    'rgba(225, 202, 150)',
  ];

  var ii = 0;

  top_five.forEach(function(artist) {
    var series_ = {
      'name': artist.artist,
      'data': [],
      'color': colors[ii],
    };

    var artist_streams = streams[artist.artist].streams;

    var running_date = new component.date(artist_streams[0].endTime);

    running_date.zero_time();
    running_date.set_day_of_month(1);

    var running_date_month = running_date.get_month();
    var running_date_ms = running_date.get_date_ms();

    var running_month_total = 0;

    for (var i = 0; i < artist_streams.length; i++) {
      var current_month = new component.date(artist_streams[i].endTime)
        .get_month();

      if (current_month !== running_date_month) {
        // reset and add to series
        series_.data.push([running_date_ms, Math.floor(running_month_total / 60)]);

        running_date.set_date(artist_streams[i].endTime);

        running_date.zero_time();
        running_date.set_day_of_month(1);

        running_date_month = running_date.get_month();
        running_date_ms = running_date.get_date_ms();

        running_month_total = Math.floor(artist_streams[i].msPlayed * 0.001);
      } else {
        running_month_total += Math.floor(artist_streams[i].msPlayed * 0.001);
      }

      // make sure we push the last data
      if (i === (artist_streams.length - 1)) {
        series_.data.push([running_date_ms, Math.floor(running_month_total / 60)]);
      }
    }

    ii++;
    series.push(series_);
  });

  return_data.series = series;

  return return_data;
};
