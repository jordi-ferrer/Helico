/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class person extends rectvol {
    constructor(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name, cara)
    {
        super(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name);
        this._cara = cara;
    }
    
    draw(transf='')
    {
        super.draw(transf);
    }
    
    move(edifici)
    {
        this.x = edifici.x;
        this.y = edifici.y - 51 ;
    }
    
    setCara(cara)
    {   
        if( document.getElementById(this._cara).innerHTML !== cara) {
            document.getElementById(this._cara).innerHTML = cara;
        }
    }
    
    naiveCopy(obj)
    {
        super.naiveCopy(obj);
    }
}
