const fires=[
    {
        id:"1",
        src:"./Images/fire.svg",
        title1:"140+",
      title2:"Fuel Bank centers",
       
    },
    {
        id:"2",
        src:"./Images/heart.svg",
        title1:"312k",
        title2:"People supported",
      
    },
    {
        id:"3",
        src:"./Images/light.svg",
        title1:"$6m",
        title2:"Fuel crisis funding",
      
    },
    
]

const data1=document.getElementById("two");
fires.map((item,index)=>(
    data1.innerHTML += `
    <div class="col-lg-4 col-md-5" data-aos="slide-up">
    <div class="row text-center">
     <img src=${item.src} class="img-fluid firehw">
    </div>
    <div class="row text-center mt-3">
      <h1
    style="color:#ffd300;font-weight:bolder;font-size:3rem;font-family:'Titan One',cursive;"
      >
          ${item.title1}
      </h1>
    </div>
    <div class="row text-center">
      <h5
      style="font-weight:700 ;font-size: x-large;font-family:'Titan One',cursive;"
      >
      ${item.title2}
      </h5>
    </div>
</div>  
      `
))