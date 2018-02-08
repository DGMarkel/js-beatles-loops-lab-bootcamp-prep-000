function theBeatlesPlay(musicians, instruments) {
let variable = [];
  for (let i = 0; i < musicians.length; i++) {
    variable.push(musicians[i] + ' plays ' +  instruments[i])
  }
  return variable;
}

function johnLennonFacts(facts) {
let variable = [];
let i = 0;
  while (i < facts.length) {
    variable.push(facts[i] + "!!!");
    i++;
  }
  return variable;
}
