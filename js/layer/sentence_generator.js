layer.sentence_generator = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.sentence_generator, layer);

layer.sentence_generator.prototype.decorate = function(parent) {
  var self = this;

  this.inputs = {};

  var paper = new component.paper({
    'title': 'Sentence generator',
    'header': 'Type a letter you want to use or select random.',
    'buttons': {
      'left': {
        'text': 'Clear',
      },
      'right': {
        'text': 'Generate',
      },
    },
  });

  // paper container
  var container = paper.get_container();

  // paper buttons
  var paper_buttons = paper.get_buttons();

  // set the event listeners
  paper_buttons.left.addEventListener('click', function() {
    self.render(); // clear the inputs
  });

  // slidey container that shows the sentence
  // will be on the bottom of the paper
  var sentence_container = document.createElement('div');

  css.apply(sentence_container, {
    'opacity': '0',
    'position': 'absolute',
    'bottom': '0',
    'left': '0',
    'box-shadow': '0px 2px 8px rgba(0,0,0,0.6)',
    'background': css.color('background_secondary'),
    'border-radius': '10px',
    'height': '0px',
    'width': '100%',
    'transition': 'opacity .2s',
    'z-index': '9998',
    'text-align': 'center',
  });

  container.appendChild(sentence_container);

  var alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z',
  ];

  paper_buttons.right.addEventListener('click', function() {
    // clear it out after each click
    sentence_container.innerHTML = '';

    css.apply(sentence_container, {
      'min-height': '100%',
      'opacity': '100',
    });

    if (
      self.inputs.letter ||
      self.inputs.letter_random
    ) {
      new component.loading_overlay().render(sentence_container);

      self.sentence = ['adjective', 'noun', 'adverb', 'verb', 'adjective', 'noun'];
      var len = self.sentence.length;
      var i = 0;

      var random_letter = alphabet[self.get_random_int(alphabet.length)];

      self.sentence.forEach(function(pos) {
        var letter = random_letter;

        if (!self.inputs.letter_random) {
          letter = self.inputs.letter.toLowerCase();
        }

        api(
          'words',
          'search_word',
          {
            'filter': {
              'letterPattern': '^' + letter,
              'partOfSpeech': pos,
              'lettersMax': 10,
              'limit': 500,
            },
          },
          function(res) {
            i++;

            if (
              res.results &&
              res.results.data &&
              res.results.data.length
            ) {
              var word = res.results.data[self.get_random_int(res.results.data.length)];
              var pos_replace = self.sentence[self.sentence.indexOf(pos)];

              self.sentence[self.sentence.indexOf(pos)] =
                (word.charAt(0).toUpperCase() + word.slice(1)) +
                (pos_replace === 'verb' ? 's' : '');
            }

            if (i === len) {
              self.show_sentence(sentence_container);
            }
          }
        );
      });
    } else {
      var sentence = document.createElement('p');

      sentence.innerText = 'Please input a letter.';

      css.apply(sentence, {
        'line-height': '75px',
      });

      sentence_container.appendChild(sentence);
    }
  });

  this.decorate_inputs(container);

  paper.render(parent);
};

layer.sentence_generator.prototype.decorate_inputs = function(parent){
  var self = this;

  // letter input
  var letter = new component.input.text({
    'label': 'What letter?',
    'update': function() {
      if (
        letter.value &&
        letter.value.length
      ) {
        self.inputs.letter = letter.value.charAt(0);
      } else {
        self.inputs.letter = null;
      }
    },
  });
  letter.render(parent);

  // random letter checkbox
  var letter_random = new component.input.check_box({
    'label': 'Random letter',
    'click': function() {
      self.inputs.letter_random = letter_random.checked;
    },
  });
  letter_random.render(parent);

  // word length input
  var word_length = new component.input.text({
    'label': 'How many words?',
    'update': function() {
      self.inputs.word_length = word_length.value;
    },
  });
  // word_length.render(parent);

  // random word length input
  var word_length_random = new component.input.check_box({
    'label': 'Random word length',
    'click': function() {
      self.inputs.random_length = word_length_random.checked;
    },
  });
  // word_length_random.render(parent);
};

layer.sentence_generator.prototype.show_sentence = function(parent){
  if (this.inputs) {
    parent.innerHTML = '';
    var sentence = document.createElement('p');

    sentence.innerText = this.sentence.join(' ');

    css.apply(sentence, {
      'line-height': '75px',
    });

    parent.appendChild(sentence);
  }
};

layer.sentence_generator.prototype.get_class = function(){
  return ['layer', 'sentence_generator'];
};
