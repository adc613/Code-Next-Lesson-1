let name = "Jamie"
let number = "22"
let adjective = "silly"
let verb1 = "eat"
let verb2 = "run"
let pluralNoun  = "dogs"

let madLib = "My name is " + name + ". I like to " + verb1 + ". I have " + number
  + pluralNoun + ". Some people say I'm " + adjective + ". My favoirte thing to do is "
  + verb2;

document.getElementById("mad-lib").append(madLib);
