/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class rope extends rectvol {
    constructor(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name) {
        super(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name);
    }

    draw(transf='') {
        super.draw(transf);
    }
    
    move() {    
        this._ang += Math.random()*4 - 2;
        if(this._ang < 0) this._ang = 0.01; 
        if(this._ang > 45) this._ang = 45;
        corda.y=heli.y + heli.height - 8;
        corda.x = heli.x + heli.width/4;
        super.move();
    }

}