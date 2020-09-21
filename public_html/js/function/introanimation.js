/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var typewriting;
var txtcount =  1; var txtcount2 =  1;
var intronote = "Note: Yo boss tried to follow you but didn't stop you from getting into his Copter. Now he will call his friends from the other corps and they will try \n\
to fly-hit you <i style='color:red'>with their copters</i>. Be careful!";
var introtxt =  "A long time in the future, in a faraway city-town... an office worker is stuck in her office. She is just tired of working and working in this grimmy building and just wants to get out " +
                "and scream ALELUYA! with all her might. Despite being stuck in such a tiny office, her employer came to work by Copter today! So she decides to take the chance and sneak into her " +
                "employer's copter before he even realises! Will you have what it takes to master the mystery of flight and take a ride around the sky-scrappers? Now is your chance!!! " ;

var txtspeed = 30;

function typeWriter() {
    if (!skipintro && txtcount < introtxt.length) {
        document.getElementById("introtext").innerHTML = introtxt.substring(0,txtcount-3) + "<b style='color:orange'>"+introtxt.substring(txtcount-3,txtcount-2)+"</b>"+ "<b style='color:orange'>"+introtxt.substring(txtcount-2,txtcount-1)+"</b>" + "<b style='color:yellow'>"+introtxt.substring(txtcount-1,txtcount)+"</b>";
        txtcount++;
        setTimeout(typeWriter, txtspeed);
    } else if( txtcount2 < intronote.length) {
        document.getElementById("introtext").innerHTML = introtxt + "<p style='color:dodgerblue'>" + intronote.substring(0,txtcount2-3) + "<b style='color:blue'>"+intronote.substring(txtcount2-3,txtcount2-1)+"</b>" + "<b style='color:aqua'>"+intronote.substring(txtcount2-1,txtcount2)+"</b>" +"</p>";;
        txtcount2++;
        setTimeout(typeWriter, txtspeed);
    } else {document.getElementById("introtext").innerHTML = introtxt + "<p style='color:dodgerblue'>" + intronote + "</p>";}
}

function skipintrou() {
    skipintro=true;
    document.getElementById("introbuttons").style.visibility="visible";
    document.getElementById("human2").style.visibility="hidden";
    document.getElementById("jefe1").style.visibility="hidden";
    document.getElementById("skipinbut").style.visibility="hidden";
    document.getElementById("introtext").style.visibility="hidden";
    document.getElementById("score").style.visibility="visible";
    typewriting.pause();
}


function intro() {
    //document.getElementById("intro").innerHTML= document.getElementById("intro").innerHTML;
    montse.draw("rotate(60deg)");
    jefe.draw();
    typeWriter();
    if(!skipintro) setTimeout(function(){ skipintrou(); }, 32000);
    
    song = "audio/typewriter-1.mp3";
    typewriting = new Audio(song);
    typewriting.play();
    setTimeout(function(){ typewriting.pause(); }, 18000);
}