$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    const question1Input = $("input:radio[name=question1]:checked").val();
    const question2Input = $("input:radio[name=question2]:checked").val();
    const question3Input = $("input:radio[name=question3]:checked").val();

    if (question1Input === "cats" && question2Input === "inside" && question3Input === "left") {
      $("#python").show();
    } else if (question1Input === "biden" && question2Input === "blue") {
      $("#liberal").show();
    } else if (question1Input === "trump" && question2Input === "red") {
      $("#conservative").show();
    } else {
      $("#moderate").show();
    }
  });
});