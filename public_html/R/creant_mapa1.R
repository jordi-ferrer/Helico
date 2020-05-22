#creant joc, Chicago, Romà JOrdi, Maig 2020



randquadrats = function(id='alo',colors=c('blue'),fileshor=2,filesver=7,height=500,width=250,border=5) {
  
  splith = c(border);
  amplada = width-2*border;
  
  for(i in fileshor:2)  {
    ampfin = amplada/i;
    splith.push(splith[splith.length - 1]+ampfin);
    amplada = amplada - ampfin;
  }
  splith.push(width-border);
  splitv = c(border);
  alcada = height-2*border;
  alcfin;
  for(i in filesver:2)
  {
    alcfin = alcada/i;
    splitv.push(splitv[splitv.length - 1]+alcfin);
    alcada = alcada - alcfin;
  }
  splitv.push(height-border);
  
  parraf = '';
  for(i in 0:(fileshor-1) ) {
    for(i in 0:(filesver-1) ) {
      color = sample(colors);
      linia = '<div class="finestra" style="top:'+splitv[j]+'px;left:'+splith[i]+
        'px;background-color:'+color+';width:'+(ampfin-border/2)+'px;height:'+(alcfin-border/2)+'px">  </div>';
      parraf=parraf+linia;
    }
  }
  
  return(parraf)
}