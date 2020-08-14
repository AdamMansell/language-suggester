$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    // -------------- Variables ---------------
    const nameInput = $("input#name").val();
    const question1Input = $("input:radio[name=question1]:checked").val();
    const question2Input = $("input:radio[name=question2]:checked").val();
    const question3Input = $("input:radio[name=question3]:checked").val();
    const question4Input = $("input:radio[name=question4]:checked").val();
    const question5Input = $("input:radio[name=question5]:checked").val();
    const question6Input = $("input:radio[name=question6]:checked").val();
    const question7Input = $("input:radio[name=question7]:checked").val();
    // ------------- Name to Text --------------
    $(".name").text(nameInput);
    // -------- Conditional Statements ---------
    if (question1Input === "cats" && question2Input === "inside" && question3Input === "left" && question4Input === "push" && question5Input === "top" && question6Input === "rice" && question7Input === "russian") {
      $("#java").hide();
      $("#react").hide();
      $("#ruby").hide();
      $("#python").fadeIn();
    } else if (question1Input === "chins" && question2Input === "inside" && question3Input === "right" && question4Input === "push" && question5Input === "bottom" && question6Input === "rice" && question7Input === "accent") {
      $("#python").hide();
      $("#react").hide();
      $("#ruby").hide();
      $("#java").show();
    } else if (question1Input === "chins" && question2Input === "outside" && question3Input === "right" && question4Input === "pull" && question5Input === "bottom" && question6Input === "backpack" && question7Input === "accent") {
      $("#python").hide();
      $("#react").hide();
      $("#ruby").hide();
      $("#all-b-java").show();
    } else if (question1Input === "chins" && question2Input === "inside" && question3Input === "middle" && question4Input === "push" && question5Input === "side" && question6Input === "potatoe" && question7Input === "russianWithAccent") {
      $("#java").hide();
      $("#python").hide();
      $("#ruby").hide();
      $("#react").show();
    } else {
      $("#java").hide();
      $("#python").hide();
      $("#react").hide();
      $("#ruby").show();
    }
  });
});