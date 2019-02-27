


var movieList = ["the goonies", "back to the future", "the breakfast club", "ghostbusters", "beetlejuice", "et", "ferris buellers day off", "full metal jacket", "gremlins", "the terminator", "aliens", "sixteen candles", "raiders of the lost ark", "stand by me", "blade runner", "the never ending story", "airplane", "weird science", "die hard", "the karate kid", "beverly hills cop", "top gun", "pretty in pink", "the thing", "the lost boys", "bill and teds excellent adventure", "the shining", "big", "footloose", "an american werewolf in london", "dirty dancing", "rhinestone", "fast times at ridgemeont high", "caddyshack", "coming to america", "short circuit", "poltergeist", "escape from new york", "who framed roger rabbit", "labyrinth", "when harry met sally", "a christmas story", "adventures in babysitting", "iron eagle", "spaceballs", "killer klowms from outer space"];

var wordAnswer = movieList[Math.floor(Math.random() * movieList.length)];




var answer = [];
for (var i = 0; i < wordAnswer.length; i++) {
    answer[i] = "_"
}

document.write(wordAnswer);

var missingLetters = wordAnswer.length;

if (missingLetters > 0) {

}

var userInput = userInput.toLowerCase();
document.onkeyup = function(event) {
    var userInput = event.key;

}

