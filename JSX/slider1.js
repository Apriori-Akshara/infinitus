const slider1=[
    {
        id:"1",
      
        title1:"1Lorem ipsum dolor sit amet consectetur repellat, dignissimos",
        title2:"1Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum iure aspernatur architecto, maxime facere ut aut, illo veniam ipsam ipsum ullam voluptates error at nisi similique cum non laborum.",
     
       
    },
    {
        id:"2",
       
        title1:"2Lorem ipsum dolor sit amet consectetur repellat, dignissimos",
        title2:"2Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum iure aspernatur architecto, maxime facere ut aut, illo veniam ipsam ipsum ullam voluptates error at nisi similique cum non laborum.",
    },
    {
        id:"3",
      
        title1:"3Lorem ipsum dolor sit amet consectetur repellat, dignissimos",
        title2:"3Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum iure aspernatur architecto, maxime facere ut aut, illo veniam ipsam ipsum ullam voluptates error at nisi similique cum non laborum.",
     
       
    },
    {
        id:"4",
       
        title1:"4Lorem ipsum dolor sit amet consectetur repellat, dignissimos",
        title2:"4Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum iure aspernatur architecto, maxime facere ut aut, illo veniam ipsam ipsum ullam voluptates error at nisi similique cum non laborum.",
    },
  
    
]

const data3=document.getElementById("four");
slider1.map((item,index)=>(
    data3.innerHTML += `

    <div class="item at709Hdec">
    <div class="row p-5 justify-content-center"
    style="background-color:#ffd300;height: 540px;"
    >
        <div class=" col-sm-8 ">
         <div class="row text-center">
        <h2 class="fontSiz"
        style="font-weight:800;"
        >
      ${item.title1}
        </h2>
         </div>
         <div class="row text-center mt-5">
            <p class="fontSiz1"
            style="font-size:x-large;font-weight: 500; line-height: 43px;"
            >
            ${item.title2}

            </p>
            </div>
         <div class="row text-center">
              <button class="btn takes">
              Donate Now <img src="./Images/arro.svg" alt="arrow" class="img-fluid fixhwjsd">
              </button>
         </div>
        </div>
    </div>
        
    </div>

    
      `
))

