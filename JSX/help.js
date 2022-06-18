const helpZ=[
    {
        id:"1",
        src:"./Images/partner.png",
        title1:" I am a partner",
      title2:"Omolola was a midwife and wanted to  Apriori gave her the opportunity to do that. She is now a full-stack Developer at Patchwork Health.",
       
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
    <div class="col-md-6 at767mt">
    <div class="card shadow takeswh" id="mobileCard">
        <div class="row">
            <img src=${item.src} alt="partner" class="img-fluid imHw">
        </div>
        <div class="row text-center my-4" style="font-weight: bold;">
                 <h3><b>
             ${item.title1}
                 </h3></b>
        </div>
        <div class="row text-center justify-content-center mt-3 px-3">
        <div class="complements">
        <h4>
        ${item.title2}
        </h4>
        </div>
                  
        </div>
        <div class="row text-center mt-3">
         <img src="./Images/yelloarro.svg" alt="arrow" class="img-fluid arrowHw">
        </div>
    </div>
</div>
      `
))