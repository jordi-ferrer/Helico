function randnuvol1(id='alo',colors=['saddlebrown','lightcoral','chocolate','brown','lightsalmon',
    'burlywood','darkgoldenrod','maroon','indianred','lightslategray',
    'pink','orange','papayawhip','peachpuff'],boles=11,spready=500,spreadx=250,minballr=20,maxballr=40) {
    parraf='';
    x=0;y=0;big=0;
    for(i=1;i<boles;i++) {
        x= Math.round(spreadx*Math.random())-130;
        y= Math.round(spready*Math.random())-130;
        big=minballr+Math.round((maxballr-minballr)*Math.random());
        color = _.sample(colors);
        
        nuv = Math.round(Math.random()*4);
        if(nuv===1) nuvclass="nuvol2";
        else nuvclass="nuvol1";
        linia = '<div class="'+nuvclass+'" style="top:'+y+'px;left:'+x+
        'px;width:'+big+'px;height:'+big+
        'px; ">  </div>';
        parraf=parraf+linia;
    }
   
     document.getElementById(id).innerHTML = parraf;
}
