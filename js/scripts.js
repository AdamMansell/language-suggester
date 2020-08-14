$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    // -------------- Variables ---------------
    const question1Input = $("input:radio[name=question1]:checked").val();
    const question2Input = $("input:radio[name=question2]:checked").val();
    const question3Input = $("input:radio[name=question3]:checked").val();
    const question4Input = $("input:radio[name=question4]:checked").val();
    const question5Input = $("input:radio[name=question5]:checked").val();
    // -------- Conditional Statements ---------
    if (question1Input === "cats" && question2Input === "inside" && question3Input === "left" && question4Input === "push" && question5Input === "top") {
      $("#java").hide();
      $("#react").hide();
      $("#python").show();
    } else if (question1Input === "cats" && question2Input === "outside" && question3Input === "left" && question4Input === "pull" && question5Input === "bottom") {
      $("#python").hide();
      $("#react").hide();
      $("#java").show();
    } else if (question1Input === "chins" && question2Input === "inside" && question3Input === "middle" && question4Input === "push" && question5Input === "side") {
      $("#java").hide();
      $("#python").hide();
      $("#react").show();
    } else {
      $("#java").hide();
      $("#python").hide();
      $("#react").hide();
      $("#ruby").show();
    }
  });
});