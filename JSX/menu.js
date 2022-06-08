 var valsZ= false;
function tryDo(){
  
    
  
     if(!valsZ){
        valsZ=true;
    document.getElementById("lasty").style.top='0px';
    document.getElementById("closed").innerHTML='CLOSE';
    // document.getElementById("oneLavels").style.display='block';
     }else{
         valsZ=false;
     document.getElementById("lasty").style.top='-1200px';
     document.getElementById("closed").innerHTML='MENU';
    //  document.getElementById("oneLavels").style.display='none';
   
}
}
