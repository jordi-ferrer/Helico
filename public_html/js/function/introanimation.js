/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var txtcount = 0;
var introtxt ="A long time in the future, in a faraway land.. an office worker is stuck in her office. She is just tired of working and just wants to get out " +
             "and scream ALELUYA! with all her might. However, she is stuck in the office. But her employer came to the office by Copter today! So she decides to take the chance and sneak into her " +
             "employer copter and take a ride around da city! Will you have what it takes to master the mystery of flight and take a fly around the sky-scrappers? Now is your chance!!!" ;
var txtspeed = 30;

function typeWriter() {
  if (!skipintro && txtcount < introtxt.length) {
    document.getElementById("introtext").innerHTML += introtxt.charAt(txtcount);
    txtcount++;
    setTimeout(typeWriter, txtspeed);
  }
}

function skipintrou() {
    skipintro=true;
    document.getElementById("introbuttons").style.visibility="visible";
    document.getElementById("human2").style.visibility="hidden";
    document.getElementById("skipinbut").style.visibility="hidden";
    document.getElementById("introtext").style.visibility="hidden";
}