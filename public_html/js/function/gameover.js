/* 
 funcions quan el helicotper xoca i mor.
 */


function gameover() {
    window.getSelection().removeAllRanges(); //this deselects the hidden button "restart"
    explosiona();
    setTimeout(function(){ mostraformjoc(); }, 2500); //wait 3 sec to show form
    xocat = true;
 
}

function explosiona() {
    var anim2;
    explosio1.ang=Math.random()*120-60;
    explosio1.width=100; explosio1.height=200;
    explosio1.x=heli.x - explosio1.width/2; explosio1.y=heli.y - explosio1.height/2;
    
    
    
    explosio2.ang=60;
    explosio2.width=10; explosio2.height=30;
    explosio2.x=heli.x - explosio2.width/2; explosio2.y=heli.y -explosio2.height/2 ;
    
    explosio3.ang=Math.random()*60-30;
    explosio3.width=5; explosio3.height=5;
    explosio3.x=heli.x - explosio3.width/2; explosio3.y=heli.y -explosio3.height/2 ;
    
    explosio1.show(); explosio2.show(); explosio3.show();
    
    
    
    helix1.vx=Math.random()*18-9; helix1.vy=Math.random()*18-9;  helix1.vang=Math.random()*20-10;
    helix2.vx=Math.random()*18-9; helix2.vy=Math.random()*18-9;  helix2.vang=-Math.random()*20-10;
    cuah.vx=Math.random()*20-10; cuah.vy=Math.random()*20-10;  cuah.vang=Math.random()*30;
    heli.vx=-bc1.vx/2; heli.vy+=-5; heli.ay=0.2; 
    cosheli.vx=heli.vx; cosheli.vy=heli.vy; cosheli.vang=Math.random()*20-10; 
    totit=240;
    it=0;
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
    
    explosio1.draw();
    explosio2.draw();
    explosio3.draw();
    
    explosio1.opacity = 1-it/240;
    explosio2.opacity = 1-it/240;;
    explosio3.opacity = 1-it/240;;
    
    explosio1.x -=1;
    explosio1.y -=1;
    explosio1.width += 2;
    explosio1.height += 2;
    explosio1.setwidths();
    
    explosio2.x -=3;
    explosio2.y -=3;
    explosio2.width += 6;
    explosio2.height += 6;
    explosio2.setwidths();
    
    explosio3.x -=1.5;
    explosio3.y -=0.5;
    explosio3.width += 3;
    explosio3.height += 1;
    explosio3.setwidths();
    it +=1;
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