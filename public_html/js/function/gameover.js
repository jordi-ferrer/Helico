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
    var anim2;
    helix1.vx=5; helix1.vy=-4;  helix1.vang=4;
    helix2.vx=-8; helix2.vy=-3;  helix2.vang=-5;
    cuah.vx=-4; cuah.vy=-8;  cuah.vang=20;
    heli.vx=-1; heli.vy=-1; heli.ay=0.2; 
    cosheli.vx=-1; cosheli.vy=-3; cosheli.vang=-3; 
    corda.vy=-5;
    it=100;
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