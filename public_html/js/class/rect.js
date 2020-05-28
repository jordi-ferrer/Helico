class rect {
  constructor(left,top,width,height) {
    this.x1 = left;
	this.y1 = top;
	this.width1 = width;
	this.height1 = height;
  }
  get x() {
    return this.x1;
  }
  get y() {
    return this.y1;
  }
  get width() {
    return this.width1;
  }
  get height() {
    return this.height1;
  }
  
  set x(ep) {
    this.x1 = ep;
  }
  set y(ep) {
    this.y1 = ep;
  }
  set width(ep) {
    this.width1 = ep;
  }
  set height(ep) {
    this.height1 = ep;
  }
}