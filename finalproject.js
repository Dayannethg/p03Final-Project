//Dayanneth Gonzalez
function check(){
  var right = document.getElementById("answer").value;
  if (right == "-2abcosC"){
    window.alert("Correct!");
    location.href="nextpage.html";
  }
  else{
    window.alert("Oops, Try Again!")

  }
}
function ruleCheck(){
  var rule= document.getElementById("rule").value;
  if(rule == "c^2=a^2+b^2-2abcosC"){
    window.alert("Nice Job!, Now lets solve for c");
    location.href="stepspage.html";
  }
  else{
    window.alert("Hmm, not quite");
  }
}
function exCheck(){
  var example = document.getElementById("exAnswer").value;
  if(example == 44.44){
    window.alert("Great! You Got It");

  }
  else{
    window.alert("Hmm, I dont think so");
  }
}
function finalCheck(){
  var final = document.getElementById("final").value;
  if (final == 6.67){
    window.alert("YAY That's right!");
    location.href="allsides.html";
  }
  else{
    window.alert("Maybe try again?");
  }
}
function select(){
  //var option = document.getElementsBy("c").value;
  windows.alert("CORRECT");
}
function stepCheck(){
  var neg2 = document.getElementById("b").value;
  if (b == "-2abcosC"){
    window.alert("You're right!");
    location.href="solution.html";
  }
  else{
    window.alert("No, no, no");
  }
}
