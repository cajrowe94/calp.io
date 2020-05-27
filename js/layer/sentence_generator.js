layer.sentence_generator = function(){
  layer.apply(this, arguments);
};
$.inherits(layer.sentence_generator, layer);

layer.sentence_generator.prototype.decorate = function(parent) {
  var paper = new component.paper({
    'title': 'Sentence generator',
    'header': 'Type a letter and length to use, or check random for either',
  });

  var container = paper.get_container();

  var letter = new component.input.text({
    'label': 'What letter?',
  });

  var letter_random = new component.input.check_box({
    'label': 'Random letter',
    'click': function() {
      console.log(letter_random.checked);
    },
  });

  var word_length = new component.input.text({
    'label': 'How many words?',
  });

  var word_length_random = new component.input.check_box({
    'label': 'Random word length',
  });

  letter.render(container);
  letter_random.render(container);
  word_length.render(container);
  word_length_random.render(container);
  paper.render(parent);
};

layer.sentence_generator.prototype.get_class = function(){
  return ['layer', 'sentence_generator'];
};
