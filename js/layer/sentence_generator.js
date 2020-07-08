layer.sentence_generator = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.sentence_generator, layer);

layer.sentence_generator.prototype.decorate = function(parent) {
  var self = this;
  this.inputs_ = {};

  var paper = new component.paper({
    'title': 'Sentence generator',
    'header': 'Type a letter and length to use, or check random for either',
  });

  // paper container
  var container = paper.get_container();

  // letter input
  var letter = new component.input.text({
    'label': 'What letter?',
    'update': function() {
      self.inputs_.letter = letter.value;
    },
  });
  letter.render(container);

  // random letter checkbox
  var letter_random = new component.input.check_box({
    'label': 'Random letter',
    'click': function() {
      self.inputs_.random_letter = letter_random.checked;
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
  word_length.render(container);

  // random word length input
  var word_length_random = new component.input.check_box({
    'label': 'Random word length',
    'click': function() {
      self.inputs_.random_length = word_length_random.checked;
    },
  });
  word_length_random.render(container);

  // submit button
  var submit_button = forge.make('button', {
    'name': 'Generate',
  });
  container.appendChild(submit_button);

  paper.render(parent);
};

layer.sentence_generator.prototype.get_class = function(){
  return ['layer', 'sentence_generator'];
};
