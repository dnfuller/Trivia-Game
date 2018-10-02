// variable for area to update
var panel = $("#quiz-area");

// Questions set
var questions = [{
  question: "What do honey bees collect?",
  answers: ["Honey", "Pollen and nectar", "Fruit juice", "Flowers"],
  correctAnswer: "Pollen and nectar"
}, {
  question: " In which U.S. state was Tennessee Williams born?",
  answers: ["California", "Tennessee", "Mississippi", "New York"],
  correctAnswer: "Mississippi"
}, {
  question: "How long is New Zealand's Ninety Mile Beach?",
  answers: ["55 miles", "80 miles", "30 miles", "90 miles"],
  correctAnswer: "55 miles"
}, {
  question: "What kind of animal is a prairie dog?",
  answers: ["A squirrel", "A rodent", "A cat", "A dog"],
  correctAnswer: "A rodent"
}, {
  question: "Which country was the Caesar salad invented in?",
  answers: ["Italy", "Costa Rica", "France", "Mexico"],
  correctAnswer: "Mexico"
}, {
  question: "Why type of musical instrument is the English horn?",
  answers: ["An oboe", "A trumpet", "A flute", "A bassoon"],
  correctAnswer: "An oboe"
}, {
  question: "What nationality was Cleopatra, Queen of Egypt?",
  answers: ["Macedonian", "Greek", "Egyptian", "Roman"],
  correctAnswer: "Greek"
}, {
  question: "How long did the 100 years war last?",
  answers: ["120", "85", "100", "116"],
  correctAnswer: "116"
}, {
  question: "Which country do kiwifruit originate from?",
  answers: ["New Guinea", "Australia", "China", "New Zealand"],
  correctAnswer: "China"
}, {
  question: "From which country do French fries originate?",
  answers: ["Belgium", "France", "United States", "Great Britain"],
  correctAnswer: "Belgium"
}, {
  question: "After what kind of animals are the Canary Islands named?",
  answers: ["Canaries", "Fish", "Dogs", "Turtles"],
  correctAnswer: "Dogs"
}, {
  question: "What color are aircraft black boxes?",
  answers: ["Lime green", "Bright orange", "Black", "Red"],
  correctAnswer: "Bright orange"
}, {
  question: "Who was the Greek god of dreams?",
  answers: ["Hephaestus", "Dionysus", "Hermes", "Morpheus"],
  correctAnswer: "Morpheus"
}, {
  question: "Who was the first American to go into space?",
  answers: ["Alan Shephard", "Neil Armstrong", "Buzz Aldren", "Jim Lovell"],
  correctAnswer: "Alan Shephard"
}, {
  question: "Who was the first baseball player to have his number retired?",
  answers: ["Rogers Hornsby", "Babe Ruth", "Lou Gehrig", "Jackie Robinson"],
  correctAnswer: "Lou Gehrig"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 225,

  countdown: function () {
    game.counter--;
    $("#counter-number").text(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function () {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>225</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' class='choices' name='question-" + i + "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function () {

    $.each($("input[name='question-0']:checked"), function () {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function () {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function () {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function () {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function () {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function () {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function () {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function () {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function () {
      if ($(this).val() === questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-9']:checked"), function () {
      if ($(this).val() === questions[9].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-10']:checked"), function () {
      if ($(this).val() === questions[10].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-11']:checked"), function () {
      if ($(this).val() === questions[11].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-12']:checked"), function () {
      if ($(this).val() === questions[12].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-13']:checked"), function () {
      if ($(this).val() === questions[13].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-14']:checked"), function () {
      if ($(this).val() === questions[14].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

this.result();

},

result: function () {

  clearInterval(timer);

  $("#sub-wrapper h2").remove();

  panel.html("<h2>And your score is...</h2>");
  panel.append("<h3>Correct Answers : " + this.correct + "</h3>");
  panel.append("<h3>Incorrect Answers : " + this.incorrect + "</h3>");
  panel.append("<h3>Unanswered : " + (questions.length - (this.incorrect + this.correct)) + "</h3><br>");
  panel.append("<h3>Questions and Correct Answers :</h3><br>");

  for (var i = 0; i < questions.length; i++) {    
    panel.append(questions[i].question + "<br>");
    panel.append(JSON.stringify(questions[i].correctAnswer + "<br><br>").replace(/\"/g, ""));
  } 
}
};

// CLICK EVENTS

$(document).on("click", "#start", function () {
  game.start();
});


$(document).on("click", "#done", function () {
  game.done();
});