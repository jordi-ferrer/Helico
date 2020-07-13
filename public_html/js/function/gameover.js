/* 
 funcions quan el helicotper xoca i mor.
 */


function gameover() {
    window.getSelection().removeAllRanges(); //this deselects the hidden button "restart"
    explosiona();
    setTimeout(function(){ mostraformjoc(); }, 1000); //wait 3 sec to show form
    xocat = true;
 
}

function explosiona() {
    var anim2;
    helix1.vx=Math.random()*18-9; helix1.vy=Math.random()*18-9;  helix1.vang=Math.random()*20-10;
    helix2.vx=Math.random()*18-9; helix2.vy=Math.random()*18-9;  helix2.vang=-Math.random()*20-10;
    cuah.vx=Math.random()*20-10; cuah.vy=Math.random()*20-10;  cuah.vang=Math.random()*30-15;
    heli.vx=-bc1.vx/2; heli.vy+=-5; heli.ay=0.2; 
    cosheli.vx=heli.vx; cosheli.vy=heli.vy; cosheli.vang=Math.random()*20-10; 
    it=180;
    anim=requestAnimationFrame(peta);    
   
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


function mostraformjoc() {
    document.getElementById("formsendsc").style.visibility="visible";
    document.getElementById("distance").value=Math.round(sco/10)/100;
    document.getElementById("clerks").value=rescats;
}