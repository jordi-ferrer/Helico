/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function explosiona() {
    //so explosio
    soExplota();
    
    var anim2;
    
    //exploding clouds:
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
    
    
    //flying parts of the helicopter
    pilot1.vx=Math.random()*14-7; pilot1.vy=-Math.random()*15+4;  pilot1.vang=Math.random()*15-7;
    cabina1.vx=Math.random()*18-9; cabina1.vy=Math.random()*18-12;
    helix1.vx=Math.random()*10-5; helix1.vy=Math.random()*10-8;  helix1.vang=Math.random()*30-15;
    helix2.vx=Math.random()*9-4; helix2.vy=Math.random()*18-12; helix2.vang=Math.random()*60-30;
    cuah.vx=Math.random()*9-4; cuah.vy=Math.random()*9-7;  cuah.vang=Math.random()*10;
    heli.vx=-bc1.vx/2; heli.vy+=-7; heli.ay=0.2;  heli.y_min=-10000;
    segment1.vang = Math.random()*16-8;
    //cadena.forEach(element => {element.ang_min = -170; element.ang_max=170});
    segment1.ang_min=-99999; segment1.ang_max=99999;
    cosheli.vx=heli.vx; cosheli.vy=heli.vy; cosheli.vang=Math.random()*20-10; 
    totit=240;
    it=0;
    anim=requestAnimationFrame(peta);    
   
    document.getElementById("gameover").style.visibility="visible"; 
    heli.setCara(":X");
}

function peta() {
    pilot1.move();
    cabina1.move();
    helix1.move();
    helix2.move();
    cuah.move();
    heli.move();
    cosheli.move();
    cadena.forEach(element => element.move());
    
    cabina1.draw();
    pilot1.draw();
    helix1.draw();
    helix2.draw();
    cuah.draw();
    heli.draw();
    cosheli.draw();
    cadena.forEach(element => element.draw());
    
    explosio1.draw();
    explosio2.draw();
    explosio3.draw();
    
    explosio1.opacity = 1-it/240;
    explosio2.opacity = 1-it/240;;
    explosio3.opacity = 1-it/240;;
    
    
    growStatic(explosio1,2,2);
    explosio1.setwidths();
    
    growStatic(explosio2,6,6);
    explosio2.setwidths();
    
    growStatic(explosio3,3,1);
    explosio3.setwidths();
    it +=1;
    if(xocat) {//this if is to avoid executing exploding animation once game
        //restarts!
        if(it>0) anim = requestAnimationFrame(peta);
        else document.getElementById(heli.name).style.visibility="hidden";
        }
    }
    
    function growStatic(rect,gv,gh) {
        rect.width += gh;
        rect.height += gv;
        rect.x -= gh/2;
        rect.y -= gv/2;
    }