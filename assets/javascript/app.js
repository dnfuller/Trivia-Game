function handleClick() {
    var amountCorrect = 0;
    var amountIncorrect = 0;
    for (var i = 1; i <= 5; i++) {
      var radios = document.getElementsByName('group' + i);
      for (var j = 0; j < radios.length; j++) {
        var radio = radios[j];
        if (radio.value == "correct" && radio.checked) {
          amountCorrect++;
        }        
        else if (radio.value == "wrong" && radio.checked) {
          amountIncorrect++;        
        }
        
      }
    }
    alert("Correct Responses: " + amountCorrect);
    finish();
    }
  
  
  
  var number = 60;
  $("#start-button").on("click", start); // starts the games
  $("#submit").on("click", handleClick);  // submits answers and finishes the game
  $("#restart").on("click", restart);
  // ----------------------------------------------------------------
  // functions
  function start() {
    counter = setInterval(timer, 1000);
    showMe(".question");
    showMe(".answers");
    showMe("#submit");
    hideMe("#start-button");
    hideMe(".rules");
  
  }
  
  function timer() {
    number-- // decrements the timer by 1
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
      alert("Times Up!")
      stop(); // calls the stop function
    }
  }
  
  function stop() {
    clearInterval(counter); // stops the timer
    $("#results").show();
    $("#restart").show();
    $(".question").hide();
    $(".answers").hide();
    $("#submit").hide();
  }
  
  function finish() {
    number = 1;
    clearInterval(counter); // stops the timer
    timer();
  }
  
  function restart() {
  
    clearInterval(counter); // stops the timer
    number = 60;
    $(".question").hide();
    $(".answers").hide();
    $("#submit").hide();
    $(".rules").show();
    $('input[name=group1]').attr('checked',false);
    $('input[name=group2]').attr('checked',false);
    $('input[name=group3]').attr('checked',false);
    $('input[name=group4]').attr('checked',false);
    $('input[name=group5]').attr('checked',false);
    start();
  }
  
  function hideMe(show) {
    $(show).hide();
  }
  
  function showMe(show) {
    $(show).show();
  }
  