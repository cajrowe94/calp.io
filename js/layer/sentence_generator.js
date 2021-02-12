layer.sentence_generator = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.sentence_generator, layer);

layer.sentence_generator.prototype.decorate = function(parent) {
  new layer.canvas.grid({
    'background': true,
  }).render(parent);

  var self = this;
  this.inputs_ = {};

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
    'transition': 'height .2s, opacity .2s',
    'z-index': '9998',
    'text-align': 'center',
  });

  container.appendChild(sentence_container);

  paper_buttons.right.addEventListener('click', function() {
    // clear it out after each click
    sentence_container.innerHTML = '';

    css.apply(sentence_container, {
      'height': '75px',
      'opacity': '100',
    });

    if (
      self.inputs_ &&
      (
        self.inputs_.letter ||
        self.inputs_.letter_random
      )
    ) {
      new component.loading_overlay().render(sentence_container);

      self.sentence = ['adjective', 'noun', 'verb', 'adjective', 'noun'];
      var len = self.sentence.length;
      var i = 0;

      var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

      var random_letter = alphabet[self.get_random_int(alphabet.length)];

      self.sentence.forEach(function(pos) {
        var letter;

        if (self.inputs_.letter_random) {
          letter = random_letter;
        } else {
          letter = self.inputs_.letter.toLowerCase();
        }

        api(
          'words',
          'search_word',
          {
            'filter': {
              'letterPattern': '^' + letter,
              'partOfSpeech': pos,
              // 'lettersMin': self.get_random_int(8) + 1,
              'page': self.get_random_int(2) + 1,
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
              self.show_sentence_(sentence_container); // build a sentence
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

  // letter input
  var letter = new component.input.text({
    'label': 'What letter?',
    'update': function() {
      if (
        letter.value &&
        letter.value.length
      ) {
        self.inputs_.letter = letter.value.charAt(0);
      } else {
        self.inputs_.letter = null;
      }
    },
  });
  letter.render(container);

  // random letter checkbox
  var letter_random = new component.input.check_box({
    'label': 'Random letter',
    'click': function() {
      self.inputs_.letter_random = letter_random.checked;
    },
  });
  letter_random.render(container);

  // word length input
  var word_length = new component.input.text({
    'label': 'How many words?',
    'update': function() {
      self.inputs_.word_length = word_length.value;
    },
  });
  // word_length.render(container);

  // random word length input
  var word_length_random = new component.input.check_box({
    'label': 'Random word length',
    'click': function() {
      self.inputs_.random_length = word_length_random.checked;
    },
  });
  // word_length_random.render(container);

  paper.render(parent);
};

layer.sentence_generator.prototype.show_sentence_ = function(parent){
  if (this.inputs_) {
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
