/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


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
        var transX = 0;
        var transY = Math.floor(this.height/5);
        document.getElementById(this._seg2).style.transform = 'translateY('+transY+'px) translateX('+transX+'px) rotate('+this._ang12+'deg)';
        document.getElementById(this._seg3).style.transform = 'translateY('+transY+'px) translateX('+transX+'px) rotate('+this._ang23+'deg)';
        document.getElementById(this._seg4).style.transform = 'translateY('+transY+'px) translateX('+transX+'px) rotate('+this._ang34+'deg)';
        document.getElementById(this._seg5).style.transform = 'translateY('+transY+'px) translateX('+transX+'px) rotate('+this._ang45+'deg)';
    }
    
    setwidths() {
        //remove
        document.getElementById(this._name).style.width = this.width + "px";
        document.getElementById(this._name).style.height = this.height + "px";
        //for this
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
        this._ang += Math.random()*4 - 2;
        if(this._ang < 0) this._ang = 0.01; 
        if(this._ang > 45) this._ang = 45;
        corda.y=heli.y + heli.height - 8;
        corda.x = heli.x + heli.width/4;
        //add segmentes movement (improve)
        this._ang12 += Math.random()*4 - 2;
        this._ang23 += Math.random()*4 - 2;
        this._ang34 += Math.random()*4 - 2;
        this._ang45 += Math.random()*4 - 2;
        
        super.move();
    }
}
