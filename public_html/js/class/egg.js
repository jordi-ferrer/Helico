class egg extends rectvol
{
    constructor(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name, apareix)
    {
        super(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name);
        this._apareix = apareix;
        this._index = 0;
        this._nested = false;
    }
    set nested(ep){
        this._nested = ep;
    }
    
    get startplace() {
        return this._apareix;
    }
    
    get nested(){
        return this._nested;
    }
    
    take() {
        segment5.width=this.width;
        segment5.height=this.height;
        segment5.setwidths();
        //la següent linia canvia la classe CSS del 5è tros de segment de
        //la corda
        document.getElementById(segment5.name).classList.add('ou');
        segment5.show();
        
        this.hidegg();
    }
    
    hidegg() {
        this.hide();
        this.x = -31;
        this.vx=0;
    }
    
    appear() {
        var array = [bc1.index, bc2.index, bc3.index, bc4.index, bc5.index, bc6.index];
        this._index = match(maxindex, array);
        
        this.x = bloc[this._index].x + bloc[this._index].width/2 ;
        this.y = bloc[this._index].y - this.height*0.9;
        this.vx =  bloc[this._index].vx;
        ou.nested = false;
        
        this.show();
    }
    
    move() {
        if(this.x < -70) {
            this.hide();
            this.vx=0;
        }
        else super.move();
    }
    
     naiveCopy(obj)
    {
        super.naiveCopy(obj);
        this._nested = obj.nested;
        
    }
}