class chair extends rectvol {
    constructor(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name)
    {
        super(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name);
    }
    
    draw(transf='')
    {
        super.draw(transf);
    }
    
    move(edifici, alçada=58)
    {
        this.x = edifici.x;
        this.y = edifici.y - alçada;
    }
    
    naiveCopy(obj)
    {
        super.naiveCopy(obj);
    }
}