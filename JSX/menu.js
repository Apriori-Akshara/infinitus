//  let doct=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
//  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
// </svg>;
 
 
 var valsZ= false;
function tryDo(){
  
    
  
     if(!valsZ){
        valsZ=true;
    document.getElementById("lasty").style.top='0px';
    // document.getElementById("closed").innerHTML='CLOSE';
    //  document.getElementById("adds").innerHTML=doct;

    document.getElementById("closed").style.display='none';
    // document.getElementById("oneLavels").style.display='block';
     }else{
         valsZ=false;
     document.getElementById("lasty").style.top='-1200px';
     document.getElementById("closed").style.display='inline-block';
    //  document.getElementById("closed").innerHTML='MENU';
    //  document.getElementById("oneLavels").style.display='none';
   
}
}

