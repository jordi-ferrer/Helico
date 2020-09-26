var border = 5; //si es vol canviar, modificar life_score.css top and left

class life extends rect
{
    constructor(left,top,width,height,life,namef,name)
    {
        super(left,top,width,height);
        starting_life = life;
        this._life = life;
        this._namef = namef;
        this._name = name;
    }
    
    get life() {
        return this._life;
    }
   
    
    set life(ep) {
        this._life = ep;
    }
    
    setwidths()
    {
        document.getElementById(this._namef).style.width = this.width + "px";
        document.getElementById(this._namef).style.height = this.height + "px";
        document.getElementById(this._name).style.width = this.width - border + "px";
        document.getElementById(this._name).style.height = this.height - border + "px";
    }
    
    update()
    {
        //if(this._life < starting_life)
        {
            document.getElementById(this._name).style.width = (this.width - border)*this._life/starting_life + "px";
        }
    }
}