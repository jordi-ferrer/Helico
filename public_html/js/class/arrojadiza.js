class arrojadiza extends rectvol
{
        constructor(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name, thrower, flying)
    {
        super(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name);
        this._thrower = thrower;
        this._flying = flying;
    }
    
    move() {
        if(this._flying) {
            super.move();
            if(this.x < -10 || this.y > 1200) {
                this.desa();
            }
        }
        else {
            this.x = this._thrower.x;
            this.y = this._thrower.y+10;
        }
    }
    
    arroja(){
        this._flying=true;
        this.show();
        
        if(heli.x<this.x) this.vx = -5- Math.random()*7;
        else this.vx =  Math.random()*5;
        this.vy = -8 - Math.random()*4;
       
    }
    
    desa(){
        this._flying = false;
        this.hide();
        this.x = this._thrower.x;
        this.y = this._thrower.y+10;
    }
    
}
