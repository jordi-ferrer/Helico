/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class llibre extends rectvol
{
        constructor(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name, building, flying)
    {
        super(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name);
        this._building = building;
        this._flying = flying;
    }
    
    
    get flying() {
        return this._flying;
    }
    
    move() {
        if(this._flying) {
            super.move();
            if(this.y > this._building.y - 25) {
                this.stop();
            }
        }
        else {
            this.x = this._building.x+15;
            this.y = this._building.y-20;
        }
    }
    
    jump() {
        this.ay = 0.2;
        this.vy = -10;
        this.vx =  this._building.vx;
        this._flying = true;
    }
    
    stop() {
        this.vy = 0;
        this.ay = 0;
        this._flying = false;
    }

    
}