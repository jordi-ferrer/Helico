/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const min_ang = 0;
const max_ang = 40;
const max_ang_diff = 15;

class rope extends rectvol
{
    constructor(left,top,width,height,vx,vy,ax,ay,ang,vang,aang,name)
    {
        super(left,top,width,height,vx,vy,ax,ay,ang,vang,aang,name);

    }

    move()
    {
        /*corda.x = heli.x + heli.width/4;
        corda.y = heli.y + heli.height - 8;
        
        this._ang += Math.random()*4 - 2;
        if(this._ang < min_ang) this._ang = min_ang; 
        if(this._ang > max_ang) this._ang = max_ang;

        super.move();*/
    }
}
