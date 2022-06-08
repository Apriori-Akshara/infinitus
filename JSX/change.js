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
    <div class="col-md-6">
            <div class="card shadow takeswhA">
                <div class="row">
                    <div class="col text-center">
                        <img src=${item.src} alt="" class="img-fluid">
                        </div>
                        <div class="col text-start">
                            <h3 class="mt-3"
                            style="color:black;font-weight:900;"
                            >
                         ${item.title1}
                            </h3>
                        </div>
                </div>
                
            </div>
        </div>
      `
))