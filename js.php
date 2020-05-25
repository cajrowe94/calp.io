<?php
header('Content-type: text/javascript');

foreach (array(
  'rocket/build/rocket.js',
  'js/css.js',
  'js/forge.js',
  'index.js',
  'js/layer.js',
  'js/component.js',
) as $file) {
  readfile($file);
}

function include_javascript($directory){
  foreach(array_reverse(scandir($directory)) as $file) {
    if (!(in_array(substr($file, 0, 1), array('.', '_')))) {
      $path = $directory . '/' . $file;
      if (is_dir($path)) {
        include_javascript($path);
      } else {
        readfile($path);
      }
    }
  }
}

foreach (array(
  'js/layer',
  'js/component',
) as $path) {
  include_javascript($path);
}