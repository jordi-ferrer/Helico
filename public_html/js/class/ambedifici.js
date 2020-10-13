class ambedifici extends rectvol
{
    constructor(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name, apareix,addy=0)
    {
        super(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name);
        this._apareix = apareix;
        this._index = 0;
        this._addy = addy;
    }
    
    get startplace() {
        return this._apareix;
    }
    

    hide() {
        super.hide();
        this.x = -31;
        this.vx=0;
    }
    
    appear() {
        var array = [bc1.index, bc2.index, bc3.index, bc4.index, bc5.index, bc6.index];
        this._index = match(maxindex, array);
        
        this.x = bloc[this._index].x + bloc[this._index].width/2 - this._width/2 ;
        this.y = bloc[this._index].y - this._height*0.5 + this._addy;
        this.vx =  bloc[this._index].vx;
        
        
        this.show();
        
    }
    
    move() {
        if(this.x < -70) {
            this.hide();
            this.vx=0;
        }
        else super.move();
    }
    
    
    
   
    
    
}