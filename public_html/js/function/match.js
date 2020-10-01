/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function match(value, array) {
    n = array.length;
    ind = -1;
    for(i=0;i<n; i++) {
        if(array[i] === value) {
            ind=i;
            i=n;
        }
    }
    return ind;
}