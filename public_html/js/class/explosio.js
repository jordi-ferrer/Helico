class explosio extends rectvol {
    constructor(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name)
    {
        super(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name);
         this._opacity=1;
    }
   
    set opacity(ep) {
        this._opacity=ep;
    }
    
    get opacity() {
        return this._opacity;
    }
    
    
    draw(transf='')
    {
        super.draw(transf);
        document.getElementById(this._name).style.opacity = this._opacity;
    }
    
    move()
    {
        super.move();
    }
    
    naiveCopy(obj)
    {
        super.naiveCopy(obj);
    }
    
    
    
    
}