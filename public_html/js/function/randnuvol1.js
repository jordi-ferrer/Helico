
function randnuvol1(id='alo',colors=['saddlebrown','lightcoral','chocolate','brown','lightsalmon',
    'burlywood','darkgoldenrod','maroon','indianred','lightslategray',
    'pink','orange','papayawhip','peachpuff'],boles=11,spready=500,spreadx=250,minballr=20,maxballr=40) {
    parraf='';
    x=0;y=0;big=0;
    for(i=1;i<boles;i++) {
        x= Math.round(spreadx*Math.random())-20;
        y= Math.round(spready*Math.random())-20;
        big=minballr+Math.round((maxballr-minballr)*Math.random());
        color = _.sample(colors);
        linia =  '<div class="nuvol1" style="top:'+y+'px;left:'+x+
        'px;width:'+big+'px;height:'+big+
        'px;"> ' + 
        
        '<div class="boleta" style="top:50%;left:0%;background-color:'+color+
        'width:20%;height:20%;border-radius:100%">  </div>' + 
        
        
        
        '</div>';

        parraf=parraf+linia;
    }
   
     document.getElementById(id).innerHTML = parraf;
}

