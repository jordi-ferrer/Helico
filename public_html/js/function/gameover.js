/* 
 funcions quan el helicotper xoca i mor.
 */


function gameover() {
    window.getSelection().removeAllRanges(); //this deselects the hidden button "restart"
    explosiona();
    setTimeout(function(){ mostraformjoc(); }, 3000); //wait 3 sec to show form
    xocat = true;
 
}

function explosiona() {
    var ang1=0;
    var ang2=0;
    var ang3=-60;
    var anim2;
    helix1.vx=5; helix1.vy=-8; helix1.ay=0.2;
    it=200;
    anim=requestAnimationFrame(peta);
    
    
    
    
   // peta("helix1", 0,0,0,200);
    
    document.getElementById(heli.name).style.backgroundColor="red";
    document.getElementById("helix1").style.backgroundColor="red";
    document.getElementById("helix2").style.backgroundColor="red";
    document.getElementById("cuah").style.backgroundColor="red";
    document.getElementById("cara").style.backgroundColor="red";
    document.getElementById("gameover").style.visibility="visible";
    heli.setCara(":X");
}

function peta() {
    helix1.move();
    helix1.draw();
    it -=1;
    if(it>0) anim = requestAnimationFrame(peta);
    }

function moupart() {
     document.getElementById(id1).style.transform = 'translateY('+y1 + 'px) translateX('+x1 + 'px) ' + 'rotate('+angi1+'deg)';
     x1=x1+4;y1=y1+3; angi1=angi1+10;
     it1=it1-1;
     if(it1>0) anim1 = requestAnimationFrame(moupart); 
}

function mostraformjoc() {
    document.getElementById("formsendsc").style.visibility="visible";
    document.getElementById("distance").value=Math.round(sco/10)/100;
    document.getElementById("clerks").value=rescats;
}