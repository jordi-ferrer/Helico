/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class helicop extends rectvol {
    constructor(left,top,width,height,vx,vy,ax,ay, name) {
        super(left,top,width,height,vx,vy,ax,ay, name);
    }

    draw() {
        super.draw(this._name);
    }
    
    move() {
        super.move();
        //s´haurien de definir els limits fora de la funció
        if(this.vy > 20) this.vy = 20;
	if(this.vy < -20) this.vy = -20;
	
	/*check height limits*/
	if(this.y > 600) {
            this.y = 600;
            this.vy = 0;
	}
	if(this.y < 0) {
            this.y = 0;
            this.vy = 0;
	}
        
        //the next if is to stop the red helicopters from going too far out of the screen
        if(this.x<-100) {
            this.x = -100;
            this.vx = 0;
	}
        
    }
}