/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class bandera extends rectvol {
    constructor(left,top,width,height,vx,vy,ax,ay, name) {
        super(left,top,width,height,vx,vy,ax,ay, name);
    }

    draw(transf='') {
        super.draw(transf);
    }
    
    move() {
        //super.move();
    }
    
    setColour(colour) {
        document.getElementById("banner").style.backgroundColor = colour;
    }
    
    naiveCopy(obj)
    {
        super.naiveCopy(obj);
    }
}