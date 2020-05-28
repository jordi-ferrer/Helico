/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function checkxoc(rect1, rect2) {
   if(rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y) 
   {
       return true;
   }
   return false;
}

function abovesegment(p1,p2,p3, obj1, ab=true) {
    //p1 and p2 are the two limit points of the segment. p3 is the point we want to check whether
    // it is above (ab=true) or below (ab=false) of the segment p1p2
    //p2.x must be > p1.x
    var m = (p2[1]-p1[1])/(p2[0]-p1[0]);
    var n = p2[1]- m*p2[0];
    quad1 = new rect(p1[0],p2[1], Math.abs(p2[0]-p1[0]), Math.abs(p2[1]-p1[1]));
    if(!checkxoc(quad1,obj1)) return false; //checking that the x + width segment intersects the p1.x, p2.x segmetn
    if(ab) return (p3[1] >= m*p3[0] + n);
    return (p3[1] <= m*p3[0] + n);
}