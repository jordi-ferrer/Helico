class ropelink extends rectvol
{
    constructor(left,top,width,height,vx,vy,ax,ay,ang,vang,aang,name, prev_seg, ang_min=-90, ang_max=90)
    {
        super(left,top,width,height,vx,vy,ax,ay,ang,vang,aang,name);
        this._ang_min = ang_min;
        this._ang_max = ang_max;
        this._prev_seg = prev_seg; //previous segment
    }

    get ang_min() {
        return this._ang_min;
    }  
    get ang_max() {
        return this._ang_max;
    }
    
    set ang_min(ep) {
        this._ang_min = ep;
    }
    set ang_max(ep) {
        this._ang_max = ep;
    }

    move()
    {        
        
        if(this._prev_seg === "heli") {
            this._ang = 70*Math.cos(sco*Math.PI/180) - 30;
            this.x = heli.x + heli.width/4;
            this.y = heli.y + heli.height - 8;
        } else {
            this._ang_min =  this._prev_seg._ang - 5;
            this._ang_max = this._prev_seg._ang +15;
            this.x = -this._width/2 + this._prev_seg.x + this._prev_seg.width/2 - this._prev_seg.height*Math.sin(this._prev_seg.ang/180*Math.PI) ;
            this.y = this._prev_seg.y + this._prev_seg.height*Math.cos(this._prev_seg.ang/180*Math.PI);
            this._ang += this._prev_seg.ang*0.1;
        
        this._ang +=  Math.random()*2-1;}
        if(this._ang < this._ang_min) this._ang = this._ang_min; 
        if(this._ang > this._ang_max) this._ang = this._ang_max;       
        
        super.move();
    }
}

