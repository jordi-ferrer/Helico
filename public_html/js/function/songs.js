/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function playsong() {
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
    var cançofons = new Audio(song);
    cançofons.loop = true;
    cançofons.play();
    
}