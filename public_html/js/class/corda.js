/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const min_ang = 0;
const max_ang = 30;
const max_ang_diff = 5;

class rope extends rectvol
{
    constructor(left,top,width,height,vx,vy,ax,ay,ang,vang,aang,name,seg1,seg2,seg3,seg4,seg5)
    {
        super(left,top,width,height,vx,vy,ax,ay,ang,vang,aang,name);
        this._seg1 = seg1;
        this._seg2 = seg2;
        this._seg3 = seg3;
        this._seg4 = seg4;
        this._seg5 = seg5;
        this._ang12 = 0; //angle diff entre segment 1 y 2
        this._ang23 = 0; //angle diff entre segment 2 y 3
        this._ang34 = 0; //angle diff entre segment 3 y 4
        this._ang45 = 0; //angle diff entre segment 4 y 5
    }

    draw(transf='')
    {
        super.draw(transf);
        var transY = Math.floor(this.height/5);
        document.getElementById(this._seg2).style.transform = 'translateY('+transY+'px) rotate('+this._ang12+'deg)';
        document.getElementById(this._seg3).style.transform = 'translateY('+transY+'px) rotate('+this._ang23+'deg)';
        document.getElementById(this._seg4).style.transform = 'translateY('+transY+'px) rotate('+this._ang34+'deg)';
        document.getElementById(this._seg5).style.transform = 'translateY('+transY+'px) rotate('+this._ang45+'deg)';
    }
    
    setwidths()
    {
        document.getElementById(this._name).style.width = this.width + "px";
        document.getElementById(this._name).style.height = this.height + "px";
        
        var height = Math.floor(this.height/5);
        document.getElementById(this._seg1).style.width = this.width + "px";
        document.getElementById(this._seg1).style.height = height + "px";
        document.getElementById(this._seg2).style.width = this.width + "px";
        document.getElementById(this._seg2).style.height = height + "px";
        document.getElementById(this._seg3).style.width = this.width + "px";
        document.getElementById(this._seg3).style.height = height + "px";
        document.getElementById(this._seg4).style.width = this.width + "px";
        document.getElementById(this._seg4).style.height = height + "px";
        document.getElementById(this._seg5).style.width = this.width + "px";
        document.getElementById(this._seg5).style.height = height + "px";
    }

    move()
    {
        corda.x = heli.x + heli.width/4;
        corda.y = heli.y + heli.height - 8;
        
        this._ang += Math.random()*4 - 2;
        if(this._ang < min_ang) this._ang = min_ang; 
        if(this._ang > max_ang) this._ang = max_ang;
        this._ang12 = Math.min(this._ang + Math.random(), max_ang_diff);
        this._ang23 = Math.min(this._ang12 + Math.random(), max_ang_diff);
        this._ang34 = Math.min(this._ang23 + Math.random(), max_ang_diff);
        this._ang45 = Math.min(this._ang45 + Math.random(), max_ang_diff);
        
        super.move();
    }
}
