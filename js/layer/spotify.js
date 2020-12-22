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
    'title': 'Top 5 artists',
  });

  var container = paper.get_container();

  css.apply(container, {
    'height': '500px',
  });

  if (this.loading === false) {
    var series_data = this.build_top_five_chart_data();
    new component.chart.spotify(series_data).render(container);
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
