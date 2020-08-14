$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const question1Input = $("input:radio[name=question1]:checked").val();
    const question2Input = $("input:radio[name=question2]:checked").val();
    const question3Input = $("input:radio[name=question3]:checked").val();
    const question4Input = $("input:radio[name=question4]:checked").val();

    if (question1Input === "cats" && question2Input === "inside" && question3Input === "left" && question4Input === "push") {
      $("#java").hide();
      $("#react").hide();
      $("#python").show();
    } else if (question1Input === "cats" && question2Input === "outside" && question3Input === "left" && question4Input === "pull") {
      $("#python").hide();
      $("#react").hide();
      $("#java").show();
    } else if (question1Input === "chins" && question2Input === "inside" && question3Input === "middle" && question4Input === "push") {
      $("#java").hide();
      $("#python").hide();
      $("#react").show();
    } else {
      $("#java").hide();
      $("#python").hide();
      $("#ruby").show();
    }
  });
});