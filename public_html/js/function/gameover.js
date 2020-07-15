/* 
 funcions quan el helicotper xoca i mor.
 */


function gameover() {
    xocat = true;
    mou=false;
    window.getSelection().removeAllRanges(); //this deselects the hidden button "restart"
    explosiona();
    setTimeout(function(){ mostraformjoc(); }, 1000); //wait 3 sec to show form
    
 
}




function mostraformjoc() {
    document.getElementById("formsendsc").style.visibility="visible";
    document.getElementById("distance").value=Math.round(sco/10)/100;
    document.getElementById("clerks").value=rescats;
}
