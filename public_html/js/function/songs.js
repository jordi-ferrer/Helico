/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var cançofons = new Audio();

function playsong() {
    if(!cançofons.paused) cançofons.pause();
    var rand = _.sample([1, 2, 3, 4, 5, 6]);
    //canço de fons
    var song = 'turkishmarch.mp3';
    if(rand===2)  song='rainbowmeadows.mp3';
    if(rand===3 ) song='Curious Dining.mp3';
    if(rand===4 ) song='rosalia/Rosalía - La Llorona.mp3';
    if(rand===5 ) song='Flight of the Bumblebee.mp3';
    if(rand===6 ) song='The-Entertainer.mp3';
    
    
    song = "audio/"+song;
    document.getElementById("aux3").innerHTML = rand + " " + song;
    document.getElementById("aux3").visibility ="visible";
    cançofons = new Audio(song);
    cançofons.loop = true;
    music="on";
    cançofons.play();
    document.getElementById("mutemusic").innerHTML ="mute music";
    
}



function soExplota() {
    path = "audio/explosions/";
    var so =  ["explosion_3.mp3", "explosion_9.mp3", "torpedo_explosion.mp3"];
    var rand = _.sample([0, 1, 2]);
    var soexplot = new Audio(path+so[rand]);
    soexplot.play();
}

function switchmusic() {
    if(music==="on") {
        music="off";
        cançofons.pause();
        document.getElementById("mutemusic").innerHTML ="play music";
    } else {
        music="on";
        cançofons.play();
        document.getElementById("mutemusic").innerHTML ="mute music";
    }
}