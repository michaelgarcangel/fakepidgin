function fakepidgin(words) {
  const string = 'Eh brah, ';
  return _.map(words, function (pidgin) { return `${string + pidgin}`; });
}

console.log(fakepidgin(['would you like to eat?', 'no thank you.']));