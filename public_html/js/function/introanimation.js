/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var typewriting;
var txtcount = 0;
var introtxt ="A long time in the future, in a faraway city-town... an office worker is stuck in her office. She is just tired of working and working in this grimmy building and just wants to get out " +
             "and scream ALELUYA! with all her might. Despite being stuck in such a tiny office, her employer came to work by Copter today! So she decides to take the chance and sneak into her " +
             "employer's copter before he even realises! Will you have what it takes to master the mystery of flight and take a ride around the sky-scrappers? Now is your chance!!!" ;
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
     typewriting.pause()
}


function intro() {
    //document.getElementById("intro").innerHTML= document.getElementById("intro").innerHTML;
    typeWriter();
    if(!skipintro) setTimeout(function(){ document.getElementById("introbuttons").style.visibility = "visible";document.getElementById("skipinbut").style.visibility="hidden"; }, 22000);
    
    song = "audio/typewriter-1.mp3";
    typewriting = new Audio(song);
    typewriting.play();
    setTimeout(function(){ typewriting.pause(); }, 18000);
}