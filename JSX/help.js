const helpZ=[
    {
        id:"1",
        src:"./Images/partner.png",
        title1:" I am a partner",
      title2:"Omolola was a midwife and wanted to build tech skills to change career. Apriori gave her the opportunity to do that. She is now a full-stack Developer at Patchwork Health.",
       
    },
    {
        id:"2",
        src:"./Images/individual.png",
        title1:"I am aIndividual",
        title2:"A Business School graduate who wanted to be an entrepreneur, Quitterie had an idea, but needed the tech skills and the right partner to build it with. At Apriori, she found both.",
      
    },
    
]

const datasA=document.getElementById("one");
helpZ.map((item,index)=>(
    datasA.innerHTML += `
    <div class="col-md-6">
    <div class="card shadow takeswh">
        <div class="row">
            <img src=${item.src} alt="partner" class="img-fluid imHw">
        </div>
        <div class="row text-center mt-3">
                 <h4>
             ${item.title1}
                 </h4>
        </div>
        <div class="row text-center mt-3 px-3">
                  <h5>
                  ${item.title2}
                  </h5>
        </div>
        <div class="row text-center mt-3">
         <img src="./Images/arro.svg" alt="arrow" class="img-fluid arrowHw">
        </div>
    </div>
</div>
      `
))