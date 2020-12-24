layer.spotify = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.spotify, layer);

layer.spotify.prototype.get_title = function(parent) {
  return '2020 Spotify stream data';
};

layer.spotify.prototype.decorate = function(parent) {
  new layer.canvas.grid({
    'background': true,
  }).render(parent);

  var description = document.createElement('p');

  description.innerHTML = 'I downloaded the past year of my Spotify streaming' +
    ' history to see my top artists and songs. ' +
    'They give you giant json files, and each file has an array of \'streams\'. ' +
    'Each stream object has the artist name, track name, date/time listened, and milliseconds played. ' +
    'So with this I was able to get my top artists, along with my favorite songs from ' +
    'those artists! With the charts I can easily see when I obsessed over certain tracks. :)' +
    '\nI used Highcharts.js to build the charts. It\'s a super awesome library.';

  parent.appendChild(description);

  this.decorate_top_three_artists(parent);

  if (
    this.loading === false ||
    window.data.spotify
  ) {
    this.decorate_top_three_artists_songs(parent);
  }
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

layer.spotify.prototype.decorate_top_three_artists = function(parent) {
  var paper = new component.paper({
    'title': 'Top 3 artists',
  });

  var container = paper.get_container();

  // var format_time = function(seconds) {
  //   var data = {};
  //   var time = (seconds / 60).toFixed(2);

  //   data.hours = Math.floor(time / 60);
  //   data.minutes = (seconds % 60);

  //   return data;
  // };

  css.apply(container, {
    'height': '575px',
  });

  // var chart_container = document.createElement('div');

  if (
    this.loading === false ||
    window.data.spotify
  ) {
    var series_data = this.get_top_three_artists_series();

    // var top_three_artists = document.createElement('h3');

    // var conversion = format_time(this.top_three_artists[0].total_seconds);

    // top_three_artists.innerHTML = '1. ' +
    //   this.top_three_artists[0].artist +
    //   ' - ' + conversion.hours + 'h ' + conversion.minutes + 'm<br>';

    // conversion = format_time(this.top_three_artists[1].total_seconds);

    // top_three_artists.innerHTML += '2. ' +
    //   this.top_three_artists[1].artist +
    //   ' - ' + conversion.hours + 'h ' + conversion.minutes + 'm<br>';

    // conversion = format_time(this.top_three_artists[2].total_seconds);

    // top_three_artists.innerHTML += '3. ' +
    //   this.top_three_artists[2].artist +
    //   ' - ' + conversion.hours + 'h ' + conversion.minutes + 'm<br>';

    // container.appendChild(top_three_artists);

    new component.chart.spotify({
      'series': series_data.series,
      'interval': 'monthly',
    }).render(container);

    // container.appendChild(chart_container);
  } else {
    // loader
    new component.loading_overlay().render(container);
    // get the data
    this.loading = true;
    this.get_spotify_data();
  }

  paper.render(parent);
};

layer.spotify.prototype.get_top_three_artists_series = function() {
  var return_data = {};
  var streams_data = $.isArray(window.data.spotify) ? window.data.spotify : [];

  // all artists streamed
  var artists = [];
  // streams indexed by artistName
  var streams = {};

  // top 3 artists
  var top_three = [
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

  // get the top 3 totals

  var shift_sequence = function(from, stream_) {
    top_three.splice(from, 0, {
      'artist': stream_.artist,
      'total_seconds': stream_.total_seconds,
    });
    top_three.pop();
  };

  $.keys(streams).forEach(function(artist) {
    if (streams[artist].total_seconds > top_three[0].total_seconds) {
      shift_sequence(0, streams[artist]);
    } else if (streams[artist].total_seconds > top_three[1].total_seconds) {
      shift_sequence(1, streams[artist]);
    } else if (streams[artist].total_seconds > top_three[2].total_seconds) {
      shift_sequence(2, streams[artist]);
    }
  });

  return_data.top_three_total = top_three;

  var series = [];

  // build out the monthly series for top 3

  var colors = [
    'rgba(66, 135, 245)',
    'rgba(66, 245, 188)',
    'rgba(225, 202, 150)',
  ];

  var ii = 0;

  top_three.forEach(function(artist) {
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

        // add nulls to disconnect series
        var temp;

        if (
          current_month < running_date_month &&
          running_date_month - current_month > 1
        ) {
          temp = new component.date(running_date_ms);
          temp.set_month(temp.get_month() + 1);

          series_.data.push([temp.get_date_ms(), 0]);

          while (
            temp.get_month() > current_month ||
            current_month - temp.get_month() > 1
          ) {
            temp.set_month(temp.get_month() + 1);
            series_.data.push([temp.get_date_ms(), 0]);
          }
        } else if (
          current_month > running_date_month &&
          current_month - running_date_month > 1
        ) {
          temp = new component.date(running_date_ms);
          temp.set_month(temp.get_month() + 1);

          series_.data.push([temp.get_date_ms(), 0]);

          while (current_month - temp.get_month() > 1) {
            temp.set_month(temp.get_month() + 1);
            series_.data.push([temp.get_date_ms(), 0]);
          }
        }

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

  this.all_streams = streams;
  this.top_three_artists = top_three;

  return return_data;
};

layer.spotify.prototype.decorate_top_three_artists_songs = function(parent) {
  var top_three = this.top_three_artists;
  var top_songs = this.get_top_three_songs();

  // numero uno artist
  var paper_first = new component.paper({
    'title': '#1 ' + top_three[0].artist + ' - Top 3 songs',
  });
  var container_first = paper_first.get_container();

  new component.chart.spotify({
    'series': top_songs[top_three[0].artist].series,
    'interval': 'daily',
  }).render(container_first);

  css.apply(container_first, {
    'height': '575px',
  });

  // numero dos artist
  var paper_second = new component.paper({
    'title': '#2 ' + top_three[1].artist + ' - Top 3 songs',
  });
  var container_second = paper_second.get_container();

  new component.chart.spotify({
    'series': top_songs[top_three[1].artist].series,
    'interval': 'daily',
  }).render(container_second);

  css.apply(container_second, {
    'height': '575px',
  });

  // numero tres artist
  var paper_third = new component.paper({
    'title': '#3 ' + top_three[2].artist + ' - Top 3 songs',
  });
  var container_third = paper_third.get_container();

  new component.chart.spotify({
    'series': top_songs[top_three[2].artist].series,
    'interval': 'daily',
  }).render(container_third);

  css.apply(container_third, {
    'height': '575px',
  });


  paper_first.render(parent);
  paper_second.render(parent);
  paper_third.render(parent);
};

layer.spotify.prototype.get_top_three_songs = function() {
  var self = this;
  var artists = $.clone(this.top_three_artists);
  var all_streams = $.clone(this.all_streams);

  var song_totals = {};

  artists.forEach(function(artist) {
    song_totals[artist.artist] = {
      'top_three': [
        {
          'song': '',
          'total_seconds': 0,
        },
        {
          'song': '',
          'total_seconds': 0,
        },
        {
          'song': '',
          'total_seconds': 0,
        },
      ],
    };
  });

  // get song totals for each top artist
  artists.forEach(function(artist) {
    all_streams[artist.artist].streams.forEach(function(stream) {
      // check for new song
      if (!song_totals[artist.artist][stream.trackName]) {
        song_totals[artist.artist][stream.trackName] = {
          'name': stream.trackName,
          'streams': [],
          'total_seconds': 0,
        };
      }

      song_totals[artist.artist][stream.trackName].streams.push(stream);

      song_totals[artist.artist][stream.trackName].total_seconds +=
        Math.floor(stream.msPlayed * 0.001);
    });
  });

  // populate the top three songs

  var shift_sequence = function(from, song_, artist) {
    song_totals[artist].top_three.splice(from, 0, {
      'song': song_.name,
      'total_seconds': song_.total_seconds,
      'streams': song_.streams,
    });
    song_totals[artist].top_three.pop();
  };

  $.keys(song_totals).forEach(function(artist) {
    $.keys(song_totals[artist]).forEach(function(song_name) {
      if (song_totals[artist][song_name].name) {
        if (song_totals[artist][song_name].total_seconds > song_totals[artist].top_three[0].total_seconds) {
          shift_sequence(0, song_totals[artist][song_name], artist);
        } else if (song_totals[artist][song_name].total_seconds > song_totals[artist].top_three[1].total_seconds) {
          shift_sequence(1, song_totals[artist][song_name], artist);
        } else if (song_totals[artist][song_name].total_seconds > song_totals[artist].top_three[2].total_seconds) {
          shift_sequence(2, song_totals[artist][song_name], artist);
        }
      }
    });

    song_totals[artist].series = self.get_top_three_song_series(song_totals[artist].top_three);
  });

  return song_totals;
};

layer.spotify.prototype.get_top_three_song_series = function(top_three) {
  var series = [];

  // build out the daily series for top three songs

  var colors = [
    '#99EDCC',
    '#C9ADA1',
    '#3C91E6',
  ];

  var ii = 0;

  top_three.forEach(function(song) {
    var series_ = {
      'name': song.song,
      'data': [],
      'color': colors[ii],
    };

    var song_streams = song.streams;

    var running_date = new component.date(song_streams[0].endTime);

    running_date.zero_time();

    var running_date_day = running_date.get_day_of_month();
    var running_date_ms = running_date.get_date_ms();

    var running_month_total = 0;

    for (var i = 0; i < song_streams.length; i++) {
      var current = new component.date(song_streams[i].endTime);
      var current_day = current.get_day_of_month();

      if (current_day !== running_date_day) {
        // reset and add to series
        series_.data.push([running_date_ms, Math.floor(running_month_total / 60)]);

        // add nulls to disconnect series
        var temp;

        if (
          (current_day < running_date_day &&
            running_date_day - current_day > 1) ||
          running_date.get_month() !== current.get_month() ||
          running_date.get_year() !== current.get_year()
        ) {
          temp = new component.date(running_date_ms);
          temp.set_day_of_month(temp.get_day_of_month() + 1);

          if (temp.get_day_of_month() !== current_day) {
            series_.data.push([temp.get_date_ms(), 0]);
          }

          while (
            current.get_year() !== temp.get_year() ||
            current.get_month() !== temp.get_month() ||
            temp.get_day_of_month() > current_day ||
            current_day - temp.get_day_of_month() > 1
          ) {
            temp.set_day_of_month(temp.get_day_of_month() + 1);
            if (temp.get_day_of_month() !== current_day) {
              series_.data.push([temp.get_date_ms(), 0]);
            }
          }
        } else if (
          (current_day > running_date_day &&
            current_day - running_date_day > 1) ||
          running_date.get_month() !== current.get_month() ||
          running_date.get_year() !== current.get_year()
        ) {
          temp = new component.date(running_date_ms);
          temp.set_day_of_month(temp.get_day_of_month() + 1);

          if (temp.get_day_of_month() !== current_day) {
            series_.data.push([temp.get_date_ms(), 0]);
          }

          while (
            current.get_year() !== temp.get_year() ||
            current.get_month() !== temp.get_month() ||
            current_day - temp.get_day_of_month() > 1
          ) {
            temp.set_day_of_month(temp.get_day_of_month() + 1);
            if (temp.get_day_of_month() !== current_day) {
              series_.data.push([temp.get_date_ms(), 0]);
            }
          }
        }

        // reset running date
        running_date.set_date(song_streams[i].endTime);

        running_date.zero_time();

        running_date_day = running_date.get_day_of_month();
        running_date_ms = running_date.get_date_ms();

        running_month_total = Math.floor(song_streams[i].msPlayed * 0.001);
      } else {
        running_month_total += Math.floor(song_streams[i].msPlayed * 0.001);
      }

      // make sure we push the last data
      if (i === (song_streams.length - 1)) {
        series_.data.push([running_date_ms, Math.floor(running_month_total / 60)]);
      }
    }

    ii++;
    series.push(series_);
  });

  return series;
};
