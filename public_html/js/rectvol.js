class rectvol extends rect {
  constructor(left,top,width,height,vx,vy,ax,ay) {
    super(left,top,width,height);
        this.vx1 = vx;
	this.vy1 = vy;
        this.ax1 = ax;
	this.ay1 = ay;
  }
  get vx() {
    return this.vx1;
  }
  get vy() {
    return this.vy1;
  }
  get ax() {
    return this.ax1;
  }
  get ay() {
    return this.ay1;
  }
  set vx(ep) {
    this.vx1 = ep;
  }
  set vy(ep) {
    this.vy1 = ep;
  }
  set ax(ep) {
    this.ax1 = ep;
  }
  set ay(ep) {
    this.ay1 = ep;
  }
  
}