class egg extends ropelink
{
    constructor(left,top,width,height,vx,vy,ax,ay,ang,vang,aang,name, prev_seg, ang_min=-90, ang_max=90)
    {
        super(left,top,width,height,vx,vy,ax,ay,ang,vang,aang,name,prev_seg,ang_min,ang_max);
        this._taken = false;
        this._index = 0;
    }
    
    get taken()
    {
        return this._taken;
    }
    
    set taken(bool) {
        this._taken = bool;
    }
    
    move()
    {
        if(this._taken)
        {
            super.move();
        }
        else
        {
            this.x = bloc[this._index].x + bloc[this._index].width/2 - this.width;
            this.y = bloc[this._index].y - this.height;
        }
    }
    
    update()
    {
        array = [bc1.index, bc2.index, bc3.index, bc4.index, bc5.index, bc6.index];
        this._index = match(maxindex, array);
        this.show();
    }
    
    
    huevasso()
    {
        if(!this.taken)
        {
            if(maxindex===13)
            {
                if(cadena.length<5)
                {
                    cadena.push(segment5);
                    segment5.update();
                    segment5.setwidths();
                }
                else
                {
                    if(checkxoc(heli,segment5) || xocarray(cadena.slice(0,3),segment5))
                    {
                        segment5.taken = true;
                    }
                    if(this.x < -30)
                    {
                        cadena.pop();
                        this.hide();
                    }
                }
            }
            else
            {
                if(cadena.length===5)
                {
                    cadena.pop();
                    this.hide();
                    segment5.taken = false;
                }
            }
        }
    }
}