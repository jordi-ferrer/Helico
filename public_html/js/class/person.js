/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class person extends rectvol {
    constructor(left,top,width,height,vx,vy,ax,ay, name, cara) {
        super(left,top,width,height,vx,vy,ax,ay, name);
        this._cara = cara;
    }
    
    draw(transf='') {
        super.draw(transf);
    }
    
    move() {
        //super.move();
    }
    
    setCara(cara) {
        document.getElementById(this._cara).innerHTML = cara;
    }
}