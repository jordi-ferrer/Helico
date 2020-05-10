class rectvol extends rect {
  constructor(left,top,width,height,vx,vy) {
    super(left,top,width,height);
    this.vx1 = vx;
	this.vy1 = vy;
  }
  get vx() {
    return this.vx1;
  }
  get vy() {
    return this.vy1;
  }
  
  set vx(ep) {
    this.vx1 = ep;
  }
  set vy(ep) {
    this.vy1 = ep;
  }
  
}