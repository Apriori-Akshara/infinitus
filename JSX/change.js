const change=[
    {
        id:"1",
        src:"./Images/heart.svg",
        title1:"MAKE A DONATION",
     
       
    },
    {
        id:"2",
        src:"./Images/group.svg",
        title1:"BECOME A PARTNER",
    },
  
    
]

const data2=document.getElementById("three");
change.map((item,index)=>(
    data2.innerHTML += `
    <div class="col-md-6 at767mt">
            <div class="card shadow takeswhA" id="lastCard11">
                <div class="row justify-content-around">
                    <div class="col-sm-4 text-center">
                        <img src=${item.src} alt="" class="img-fluid" id="at425hwimgs">
                        </div>
                        <div class="col-sm-7 text-start">
                            <h3 class="mt-3 changeAt425" id="yelarro2"
                            style="color:black;font-weight:900;font-family:'Titan One',cursive;"
                            >
                         ${item.title1}
                            </h3>
                        </div>
                </div>
                
            </div>
        </div>
      `
))