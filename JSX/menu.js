 var valsZ= false;
function tryDo(){
  
    
  
     if(!valsZ){
        valsZ=true;
    document.getElementById("lasty").style.top='0px';
    document.getElementById("closed").innerHTML='CLOSE';
     }else{
         valsZ=false;
     document.getElementById("lasty").style.top='-1200px';
     document.getElementById("closed").innerHTML='MENU';
   
}
}
