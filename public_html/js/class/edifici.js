/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class edifici extends rectvol {
    constructor(left,top,width,height,vx,vy,ax,ay,ang, vang, aang,name, index) {
        super(left,top,width,height,vx,vy,ax,ay, ang, vang, aang,name);
        if(this._y < 300) this._y = 300;
        if(this._y > 450) this._y = 450;
        this._index = index;
    }
    
    get index() {
        return this._index;
    }
    
    get y() {
      return this._y;
    }
    
    set index(ep) {
        this._index = ep;
    }
    
    set y(ep) {
      this._y = ep;
      if(this._y < 300) this._y = 300;
      if(this._y > 450) this._y = 450;
    }

    inc_index() {
        this._index++;
    }
    
    draw(transf='') {
        super.draw(transf);
    }
    
    move() {
        //super.move();
    }
    
    setColour(colour) {
        document.getElementById(this._name).style.backgroundColor = colour;
    }
    
    createWindows() {
        var id = this._name;
        var colors = ["LightCyan", "#bf7873", "#e9b088", "greenyellow"];
        var fileshor = 4;
        var filesver = 13;
        var height = this._height;
        var width = this._width;
        var border = 3;
        
        randquadrats(id,colors,fileshor,filesver,height,width,border);
    }
    
    naiveCopy(obj)
    {
        super.naiveCopy(obj);
    }
}