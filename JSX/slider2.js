const slider2=[
    {
        id:"1",
        src:"./Images/mary-anne.png.webp",
        title1:" Clair,HartlePower",
        title2:"1Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum iure aspernatur architecto, maxime facere ut aut, illo veniam ipsam ipsum ullam voluptates error at nisi similique cum non laborum.",
     
       
    },
    {
        id:"2",
        src:"./Images/paul.png.webp",
        title1:" Robert,HartlePower",
        title2:"2Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum iure aspernatur architecto, maxime facere ut aut, illo veniam ipsam ipsum ullam voluptates error at nisi similique cum non laborum.",
    },
    {
        id:"3",
        src:"./Images/mary-anne.png.webp",
        title1:" Alexa,HartlePower",
        title2:"3Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum iure aspernatur architecto, maxime facere ut aut, illo veniam ipsam ipsum ullam voluptates error at nisi similique cum non laborum.",
     
       
    },
    {
        id:"4",
        src:"./Images/audrey.png.webp",
        title1:"kalark,HartlePower",
        title2:"4Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum iure aspernatur architecto, maxime facere ut aut, illo veniam ipsam ipsum ullam voluptates error at nisi similique cum non laborum.",
    },
  
    
]

const data5=document.getElementById("six");
slider2.map((item,index)=>(
    data5.innerHTML += `

    <div class="item">
    <div class="row"
    style="background-color: white;padding:100px 0"
    >

    </div>
     <div class="row  justify-content-center slider2hw" 
     style="background-color:#ffd300;"
     >
         <div class=" col-sm-8 cenfix">
        
          <div class="row text-center marginTop">
             <p id="small0"
             style="font-size:x-large;font-weight: 500; line-height: 43px;"
             >
             ${item.title2}
 
             </p>
             </div>
 
             <div class="row text-center mt-3">
             <p id="small1"
             style="font-size:x-large;font-weight: 800; line-height: 43px;"
             >
            ${item.title1}
             </p>
             </div>
         
         </div>
         <div class="upper text-center">
         <img src=${item.src} alt="marry" class="img-fluid marryHw">
         </div>
     </div>
 </div>
    
      `
))