/* 
 funcions quan el helicotper xoca i mor.
 */


function gameover() {
    window.getSelection().removeAllRanges(); //this deselects the hidden button "restart"
    explosiona();
    setTimeout(function(){ mostraformjoc(); }, 700); //wait 3 sec to show form
    xocat = true;
 
}

function explosiona() {
    var anim2;
    helix1.vx=3; helix1.vy=-4;  helix1.vang=6;
    helix2.vx=-8; helix2.vy=-3;  helix2.vang=-5;
    cuah.vx=-4; cuah.vy=-8;  cuah.vang=20;
    heli.vx=-bc1.vx/2; heli.vy+=-5; heli.ay=0.2; 
    cosheli.vx=-1; cosheli.vy=-3; cosheli.vang=-3; 
    corda.vy=-5; 
    it=140;
    anim=requestAnimationFrame(peta);
    
    
    
    
   // peta("helix1", 0,0,0,200);
   
    document.getElementById("gameover").style.visibility="visible"; 
    heli.setCara(":X");
}

function peta() {
    helix1.move();
    helix2.move();
    cuah.move();
    heli.move();
    cosheli.move();
    corda.move();
    
    helix1.draw();
    helix2.draw();
    cuah.draw();
    heli.draw();
    cosheli.draw();
    corda.draw();
    
    it -=1;
    if(xocat) {//this if is to avoid executing exploding animation once game
        //restarts!
        if(it>0) anim = requestAnimationFrame(peta);
        else document.getElementById(heli.name).style.visibility="hidden";
        }
    }
d

function mostraformjoc() {
    document.getElementById("formsendsc").style.visibility="visible";
    document.getElementById("distance").value=Math.round(sco/10)/100;
    document.getElementById("clerks").value=rescats;
}