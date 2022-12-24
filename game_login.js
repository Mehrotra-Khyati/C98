// Create function addUser()
function _addUser___ {
  // Get value of user by id player1_name_input and player2_name_input
document.getElementById("player1_name_input");
document.getElementById("player2_name_input");


  // Store these values locally
  localStorage.setItem("player1_name_input");
  localStorage.setItem("player2_name_input");

  //Assign "game_page.html" to window.location
  window.location("game_page.html");
}
function send(){
  number1=document.getElementById("number1").value ;
  number2=document.getElementById("number2").value ;
  actual_answer=parseInt(number1) *parseInt(number2);
  question_number="<h4>"+ number1 + "X"  +number2 + "</h4>";
  input_box = "<br>Answer  : <input type='text' id = 'input_check_box'>";
  check_button="<br><br><button class='btn btn-info'onclick='check()'>Check</button";
  row = question_number+input_box+check_button;
  document.getElementById("output").innerHTML=row;
  document.getElementById("number1").value="";
  document.getElementById("number2").value="";

}

