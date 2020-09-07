/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const vy_lim = 20;
const height_lim = 31100;

class helicop extends rectvol {
    constructor(left=20,top,width,height,vx,vy,ax,ay,ang, vang, aang, name, y_min) {
        super(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name);
        this._y_min=y_min;
    }
    get y_min() {
        return this._y_min;
    }
   
    
    set y_min(ep) {
        this._y_min = ep;
    }

    draw(transf='') {
        super.draw(transf);
    }
    
    move() {
        super.move();
        /*check velocity limits*/
        if(this.vy > vy_lim) this.vy = vy_lim;
	if(this.vy < -vy_lim) this.vy = -vy_lim;
	
	/*check height limits*/
	if(this.y > height_lim) {
            this.y = height_lim;
            this.vy = 0;
	}
	if(this.y < this._y_min) {
            this.y = this._y_min;
            this.vy = 0;
	}
        
        //the next if is to stop the red helicopters from going too far out of the screen
        if(this.x<-300) {
            this.x = -300;
            this.vx = 0;
	}
    }
    
    setCara(cara) {
        document.getElementById("cara").innerHTML = cara;
    }
    
    setCaraEnemic(cara) {
        document.getElementById("cara2").innerHTML = cara;
    }
    
    naiveCopy(obj)
    {
        super.naiveCopy(obj);
    }
}