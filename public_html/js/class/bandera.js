/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class bandera extends rectvol {
    constructor(left,top,width,height,vx,vy,ax,ay, name)
    {
        super(left,top,width,height,vx,vy,ax,ay, name);
        this._index = 0;
    }
    
    get index()
    {
        return this._index;
    }
    
    set index(i)
    {
        this._index = i;
        this.x = bloc[i].x + bloc[i].width - this.width;
        this.y = bloc[i].y - 58;
    }

    draw(transf='')
    {
        super.draw(transf);
    }
    
    move()
    {
        this.x = bloc[this._index].x + bloc[this._index].width - this.width;
        this.y = bloc[this._index].y - 58;
    }
    
    setColour(colour)
    {
        document.getElementById("banner").style.backgroundColor = colour;
    }
    
    naiveCopy(obj)
    {
        super.naiveCopy(obj);
        this._index = obj.index;
    }
}