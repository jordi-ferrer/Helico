

function randbolet2(id='alo',colors=['saddlebrown','lightcoral','chocolate','brown','lightsalmon',
    'burlywood','darkgoldenrod','maroon','indianred','lightslategray',
    'pink','orange','papayawhip','peachpuff'],boles=11,spready=500,spreadx=250,minballr=20,maxballr=40) {
    parraf='';
    x=0;y=0;big=0;
    for(i=1;i<boles;i++) {
        x= Math.round(spreadx*Math.random())-20;
        y= Math.round(spready*Math.random())-20;
        big=minballr+Math.round((maxballr-minballr)*Math.random());
        color = _.sample(colors);
        linia = '<div class="boleta" style="top:'+y+'px;left:'+x+
        'px;background-color:'+color+';width:'+big+'px;height:'+big+
        'px;border-radius:'+big+'px">  </div>';
        parraf=parraf+linia;
    }
   
     document.getElementById(id).innerHTML = parraf;
}

function randquadrats(id='alo',colors=['blue'],fileshor=2,filesver=7,height=500,width=250,border=5) {
    
    var splith = [border];
    var amplada = width-border;
    var ampfin = amplada/fileshor;
    for(i=fileshor;i>1;i--)
    {
        //ampfin = amplada/i;
        splith.push(splith[splith.length - 1]+ampfin );
        //amplada = amplada - ampfin;
    }
    splith.push(width);
    
    var splitv = [border];
    var alcada = height-border;
    var alcfin = alcada/filesver;
    for(i=filesver;i>1;i--)
    {
        //alcfin = alcada/i;
        splitv.push(splitv[splitv.length - 1]+alcfin);
        //alcada = alcada - alcfin;
    }
    splitv.push(height);
    
    parraf = '';
    for(i=0;i<fileshor;i++) {
        for(j=0;j<filesver;j++) {
            color = _.sample(colors);
            linia = '<div class="finestra" style="top:'+splitv[j]+'px;left:'+splith[i]+
            'px;background-color:'+color+';width:'+(splitv[j+1]-splitv[j]-border)+'px;height:'+(splith[i+1]-splith[i]-border)+'px">  </div>';
            parraf=parraf+linia+"\n";
        }
    }
   
     document.getElementById(id).innerHTML = parraf;
}

function llenga(lang='cat') {
    if(lang=='cat') {
        document.getElementById('salist').innerHTML = document.getElementById('catlist').innerHTML;
    }
    if(lang=='eng') {
        document.getElementById('salist').innerHTML = document.getElementById('englist').innerHTML;
    }
    if(lang=='cas') {
        document.getElementById('salist').innerHTML = document.getElementById('caslist').innerHTML;
    }
}